#%%
import matplotlib.pyplot as plt;
from numpy import *;

#a
def gvalue(x, n):
    return sin(x) / x ** n;
    
#b
domain = linspace(-5, 5, 1000);
plt.ylim(-1, 1);

function = gvalue(domain, 1);
plt.plot(domain, function);

function = gvalue(domain, 2);
plt.plot(domain, function);

function = gvalue(domain, 3);
plt.plot(domain, function);

plt.show();
# %%
