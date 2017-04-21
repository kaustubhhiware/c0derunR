
import sys

class PyMouseMeta(object):

    def press(self, x, y, button = 1):
        
        raise NotImplementedError

    def release(self, x, y, button = 1):
        
        raise NotImplementedError

    def click(self, x, y, button = 1):
        self.press(x, y, button)
        self.release(x, y, button)

    def move(self, x, y):
        
        raise NotImplementedError

    def position(self):
        
        raise NotImplementedError

    def screen_size(self):
        

        raise NotImplementedError

from unix import PyMouse
