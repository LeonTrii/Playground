#%%
import matplotlib.pyplot as plt;
from numpy import *;

#a
def logistic(x,r):
    return r * x * (1 - x);
    
#b
domain = linspace(0, 0.5, 1000);
plt.ylim(0, 20);

#c
for i in range(1, 4):
    function = logistic(domain, i);
    plt.plot(domain, function);
# %%
