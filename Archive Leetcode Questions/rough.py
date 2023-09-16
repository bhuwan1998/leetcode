import numpy as np 
import pandas as pd 
import statistics as st 
import matplotlib.pyplot as plt 


list_1 = [13, 15, 16, 16, 19, 20, 20, 21, 22, 22, 25, 25, 25, 25, 30, 33, 33, 35, 35, 35, 35, 36,
40, 45, 46, 52, 70]

mean = st.mean(list_1)
median = st.median(list_1)
midrange = (max(list_1)+min(list_1))/2
mode = st.mode(list_1)
quantiles = st.quantiles(list_1)
percentile = np.percentile(list_1, [25, 50, 75])

print('percentile : ', percentile)
print('')

print("Quantile :", quantiles)
print('')
print("mean :", mean)
print('')
print("mode :", mode)
print('')
print("median :", median)
print('')
print("midgrange :", midrange)
plt.boxplot(list_1)
plt.show()
