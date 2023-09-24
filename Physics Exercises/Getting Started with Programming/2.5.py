#%%
import math;
from numpy import *
from matplotlib import *
import matplotlib.pyplot as plt

#a
def normal(x,mu,sigma):
    return 1 / math.sqrt(2 * math.pi * sigma ** 2) * math.e ** (-((x - mu) ** 2) / 2 * sigma ** 2);

domain = linspace(-5, 5, 1000);
#b
function_one = normal(domain, 0, 1);
plt.plot(domain, function_one);

#c
function_one = normal(domain, 0, 2);
function_two = normal(domain, 0, 0.5);
plt.plot(domain, function_one);
plt.plot(domain, function_two);

#d
function = normal(domain, 0, 1);
plt.subplot(4, 4, 1)
plt.plot(domain, function)

function = normal(domain, 1, 1);
plt.subplot(4, 4, 2)
plt.plot(domain, function)

function = normal(domain, 2, 1);
plt.subplot(4, 4, 3)
plt.plot(domain, function)
# %%
