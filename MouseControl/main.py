

import cv2
import numpy as np
from pymouse import PyMouse

cap=cv2.VideoCapture(0)
p = q = i = 0
m = PyMouse()
sw, sh = m.screen_size()
r,frame=cap.read()
(imx,imy,nc)=frame.shape
while True:
    returnVal,frame=cap.read()
    img=cv2.GaussianBlur(frame, (5,5), 0)
    img=cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    blue_lower=np.array([100,150,0],np.uint8)
    blue_upper=np.array([140,255,255],np.uint8)
    blue=cv2.inRange(img,blue_lower,blue_upper)
    contours, hierarchy = cv2.findContours(blue,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    contours = sorted(contours, key = cv2.contourArea, reverse = True)[:1]
    if len(contours):
        if cv2.contourArea(contours[0])>1000:
            cnt=contours[0]
            rect = cv2.minAreaRect(cnt)
            box = cv2.cv.BoxPoints(rect)
            box = np.int0(box)
            cv2.drawContours(frame,[box],0,(0,0,255),2)
            p=p+1
            (x,y),(w,h),a=rect
            sx=(int(imy)-int(x))*(sw*8/7)/int(imy)-sh/25
            sy=int(y)*(sh*8/7)/int(imx)-sh/25
            m.move(sx,sy)
    red_lower=np.array([0,150,0],np.uint8)
    red_upper=np.array([10,255,255],np.uint8)
    red=cv2.inRange(img,red_lower,red_upper)
    contours, hierarchy = cv2.findContours(red,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    contours = sorted(contours, key = cv2.contourArea, reverse = True)[:1]
    if len(contours):
        if cv2.contourArea(contours[0])>1000:
            cnt=contours[0]
            rect = cv2.minAreaRect(cnt)
            box = cv2.cv.BoxPoints(rect)
            box = np.int0(box)
            cv2.drawContours(frame,[box],0,(0,0,255),2)
            (x1,y1),(w1,h1),a1=rect
            q=q+1
    kernel = np.ones((5,5),np.uint8)
    opening = cv2.morphologyEx(blue, cv2.MORPH_CLOSE, kernel)
    cv2.imshow('img',frame)
    if p==1 and q==1:
        if abs(x-x1)<(w+w1)/2 and abs(y-y1)<(h+h1)/2 and i==0:
            m.click(sx,sy,1)
            i=1
        elif abs(x-x1)>(w+w1)/2 or abs(y-y1)>(h+h1)/2:
            i=0
    key = cv2.waitKey(10) & 0xFF
    if key == ord('q'):
        break #ESC
    p=0
    q=0
cap.release()
cv2.destroyAllWindows()
