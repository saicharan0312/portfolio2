from PIL import Image
import requests
import numpy as np
import math
import cv2

def gaussian_filter_function(x_direction,standard_deviation):
    const_value = 1/((math.sqrt(2*math.pi)))
    exp_value = np.exp(-(x_direction**2)/(2*(standard_deviation**2)))
    return const_value/standard_deviation*exp_value

def gaussian_derivative_function(direction,standard_deviation):
    const_value = 1/((math.sqrt(2*math.pi)))
    exp_value = np.exp(-(direction**2)/(2*(standard_deviation**2)))
    return -direction*const_value/(standard_deviation**3)*exp_value

def cv2_convolve_function(I,gaussian_kernel):
    final_array = []
    for row in I:
        new_array = []
        i = 0
        while(i+len(gaussian_kernel) <= len(row)):
            val = 0
            for j in range(len(gaussian_kernel)):
                val = val + row[i+j]*gaussian_kernel[j]
            new_array.append(val)
            i = i + 1
        final_array.append(new_array)
    return final_array


def cv2_non_maximum_suppression(m,theta_in_deg):
    for i in range(len(m)):
        for j in range(len(m[i])):
# For 0 degree vertices
            if (theta_in_deg[i][j] >= 0 and theta_in_deg[i][j] <= 22.5) or (theta_in_deg[i][j] <= 0 and theta_in_deg[i][j] >= -22.5):
                if j-1 < 0:
                    n1 = 0
                    n2 = m[i][j]
                    n3 = m[i][j+1]
                elif j+1 >= len(m[i]):
                    n1 = m[i][j-1]
                    n2 = m[i][j]
                    n3 = 0
                else:
                    n1 = m[i][j-1]
                    n2 = m[i][j]
                    n3 = m[i][j+1]
# For 45 degree vertices
            elif (theta_in_deg[i][j] > 22.5 and theta_in_deg[i][j] <= 45) or (theta_in_deg[i][j] >= 45 and theta_in_deg[i][j] < 67.5):
                if (i-1 < 0 and j-1 < 0) or (j+1 >= len(m[i]) and i+1 >= len(m)):
                    n1 = 0
                    n2 = m[i][j]
                    n3 = 0
                elif j+1 >= len(m[i]) and i-1 < 0:
                    n1 = 0
                    n2 = m[i][j]
                    n3 = m[i+1][j-1]
                elif i+1 >= len(m) and j-1 < 0:
                    n1 = m[i-1][j+1]
                    n2 = m[i][j]
                    n3 = 0
# For 90 degree vertices
            elif (theta_in_deg[i][j] >= 67.5 and theta_in_deg[i][j] <= 90) or (theta_in_deg[i][j] <= -67.5 and theta_in_deg[i][j] >= -90):
                if i-1 < 0:
                    n1 = 0
                    n2 = m[i][j]
                    n3 = m[i+1][j]
                elif i+1 >= len(m):
                    n1 = m[i-1][j]
                    n2 = m[i][j]
                    n3 = 0
                else:
                    n1 = m[i-1][j]
                    n2 = m[i][j]
                    n3 = m[i+1][j]
# For -45 degree vertices
            elif (theta_in_deg[i][j] < -22.5 and theta_in_deg[i][j] >= -45) or (theta_in_deg[i][j] >= -45 and theta_in_deg[i][j] < -67.5):
                if (i-1 < 0 and j+1 > len(m[i])) or (j-1 < 0 and i+1 > len(m)):
                    n1 = 0
                    n2 = m[i][j]
                    n3 = 0
                elif i-1 < 0 and j-1 < 0:
                    n1 = 0
                    n2 = m[i][j]
                    n3 = m[i+1][j+1]
                elif i+1 >= len(m) and j+1 >= len(m[i]):
                    n1 = m[i-1][j-1]
                    n2 = m[i][j]
                    n3 = 0
            ''' If the magnitude of i and j value is less than its corresponding
adjacent direction values
                then value will be set to 0. Otherwise value is not modified.'''
            if n2 < n1 or n2 < n3:
                m[i][j] = 0
    return m


def cv2_hysteresis_threshold_function(image,i,j):
    if visited[i][j]:
        return
    visited[i][j] = True
    if i < 0 or i >= image.shape[0] or j < 0 or j >= image.shape[1]:
        return
    if image[i][j] < low:
        image[i][j] = 0
        return
    elif image[i][j] > high:
        return
    
    cv2_hysteresis_threshold_function(image,i+1,j-1)
    cv2_hysteresis_threshold_function(image,i+1,j)
    cv2_hysteresis_threshold_function(image,i+1,j+1)

    cv2_hysteresis_threshold_function(image,i,j+1)
    cv2_hysteresis_threshold_function(image,i,j-1)
    #cv2_hysteresis_threshold_function(image,i+1,j)

    cv2_hysteresis_threshold_function(image,i-1,j-1)
    cv2_hysteresis_threshold_function(image,i-1,j)
    cv2_hysteresis_threshold_function(image,i-1,j+1)

def cv2_threshold_value(image):
    for i in range(len(image)):
        for j in range(len(image[i])):
            if image[i][j] < low:
                image[i][j] = 0
            elif image[i][j] < high and image[i][j] > low:
                cv2_hysteresis_threshold_function(image,i,j)

# list_url : List of URL of 3 images
list_url = ["https://www2.eecs.berkeley.edu/Research/Projects/CS/vision/bsds/BSDS300/html/images/plain/normal/gray/102061.jpg",
            "https://www2.eecs.berkeley.edu/Research/Projects/CS/vision/bsds/BSDS300/html/images/plain/normal/gray/182053.jpg",
            "https://www2.eecs.berkeley.edu/Research/Projects/CS/vision/bsds/BSDS300/html/images/plain/normal/gray/22013.jpg"]

# standard_deviation : List of Standard Deviation values
standard_deviation = [0.5,1,3]
for u in range(len(list_url)):
    for s in range(len(standard_deviation)):

    # Question 1 :
    # I : Matrix I to store image
      image = Image.open(requests.get(list_url[u], stream=True).raw)
      I = np.asarray(image)

    # Question 2:
      kernel = [-2,-1,0,1,2]
    # G : Gaussian Mask
      G = []
      for i in range(len(kernel)):
        G.append(gaussian_filter_function(kernel[i],standard_deviation[s]))
      I_x = np.array(cv2_convolve_function(I,G))
      image_name = "I_x_Image_" + str(u+1) + "_SD_" + str(standard_deviation[s])+ ".jpg"

      cv2.imwrite(image_name,cv2.normalize(I_x, None, 0, 255, norm_type=cv2.NORM_MINMAX))

      I_y = np.array(cv2_convolve_function(np.transpose(I),G))
      I_y = np.transpose(I_y)
      image_name = "I_y_Image_" + str(u+1) + "_SD_" + str(standard_deviation[s])+ ".jpg"

      cv2.imwrite(image_name,cv2.normalize(I_y, None, 0, 255, norm_type=cv2.NORM_MINMAX))

    # Question 3:
    # G_x : Gaussian derivative Mask in x direction
    # G_y : Gaussian derivative Mask in y direction
      G_x = []
      for i in range(len(kernel)):
        G_x.append(gaussian_derivative_function(kernel[i],standard_deviation[s]))
      G_y = np.transpose(G_x)

    # Question 4:
    # I_x_prime : Convolving Image I with Gaussian derivative Mask in x direction
    # I_y_prime : Convolving Image I with Gaussian derivative Mask in y direction
      I_x_prime = np.array(cv2_convolve_function(I,G_x))
      I_y_prime = np.array(np.transpose(cv2_convolve_function(np.transpose(I),G_x)))

    # Question 5:
    # Padding rows and columns to I_x_prime and I_y_prime. Since the size of array is reduced
    # after convolving image with gaussian derivative.
      rows_original_image, column_original_image = I.shape
      row_x, column_x = I_x_prime.shape
      row_y, column_y = I_y_prime.shape
      diff = rows_original_image - row_y
      for i in range(int(diff/2)):
          padd = [[0] * (column_original_image)]
          I_y_prime = np.append(I_y_prime,padd,axis=0)
          I_y_prime = np.insert(I_y_prime,0,padd,axis=0)
      diff = column_original_image - column_x
      for i in range(int(diff/2)):
          padd = [[0] * (rows_original_image)]
          I_x_prime = np.append(I_x_prime,np.transpose(padd),axis=1)
          I_x_prime = np.insert(I_x_prime,0,padd,axis=1)

      image_name = "I_x_prime_Image_" + str(u+1) + "_SD_" + str(standard_deviation[s]) + ".jpg"
      cv2.imwrite(image_name,cv2.normalize(I_x_prime, None, 0, 255, norm_type=cv2.NORM_MINMAX))

      image_name = "I_y_prime_Image_" + str(u+1) + "_SD_" + str(standard_deviation[s]) + ".jpg"
      cv2.imwrite(image_name,cv2.normalize(I_y_prime, None, 0, 255, norm_type=cv2.NORM_MINMAX))

    # M : Magnitude of the edge including I_x_prime and I_y_prime
      M = ((I_x_prime**2) + (I_y_prime**2))**(1/2)
      image_name = "Magnitude_Image_" + str(u+1) + "_SD_" + str(standard_deviation[s]) + ".jpg"
      cv2.imwrite(image_name,cv2.normalize(M, None, 0, 255, norm_type=cv2.NORM_MINMAX))

    # Question 6
    # theta : calculating angle using tan-1
      theta = np.arctan(I_y_prime/I_x_prime)
    # Filling nan values with pi/2 and converting radians to degree
      index = np.isnan(theta)
      theta[index] = math.pi/2
      theta_in_deg = np.rad2deg(theta)
      M_non_max_suppression = cv2_non_maximum_suppression(M, theta_in_deg)

      image_name = "Non_Max_Suppression_Image_" + str(u+1) + "_SD_" + str(standard_deviation[s]) + ".jpg"
      cv2.imwrite(image_name,cv2.normalize(M_non_max_suppression, None, 0, 255, norm_type=cv2.NORM_MINMAX))

    # Question 7
    # visited : Array of boolean which is used to track whether the value is already checked or not.
    #           If it is not visited then value is False.
    #           If it is visited then value is True.
    # high : Maximum value of the non maximum suppression array * 0.3
    # low :  Maximum value of the non maximum suppression array * 0.1
      visited = [[False for _ in range(len(M_non_max_suppression[0]))] for _ in range(len(M_non_max_suppression))]
      visited = np.array(visited)
      high = M_non_max_suppression.max()* 0.3
      low = M_non_max_suppression.max()* 0.1
      cv2_threshold_value(M_non_max_suppression)

      image_name = "Threshold_image_" + str(u+1) + "_SD_" +str(standard_deviation[s]) + ".jpg"
      cv2.imwrite(image_name,cv2.normalize(M_non_max_suppression, None, 0, 255, norm_type=cv2.NORM_MINMAX))