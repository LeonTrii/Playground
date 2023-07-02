import numpy as np

mean = lambda arr, wholeArr: [[arr[0].mean(), arr[1].mean(), arr[2].mean()], #Rows
[np.array([arr[0][0], arr[1][0], arr[2][0]]).mean(), np.array([arr[0][1], arr[1][1], arr[2][1]]).mean(), np.array([arr[0][2], arr[1][2], arr[2][2]]).mean()], #Columns
wholeArr.mean()]; 

var = lambda arr, wholeArr: [[arr[0].var(), arr[1].var(), arr[2].var()], #Rows
[np.array([arr[0][0], arr[1][0], arr[2][0]]).var(), np.array([arr[0][1], arr[1][1], arr[2][1]]).var(), np.array([arr[0][2], arr[1][2], arr[2][2]]).var()], #Columns
wholeArr.var()]; 

standardDeviation = lambda arr, wholeArr: [[arr[0].std(), arr[1].std(), arr[2].std()], #Rows
[np.array([arr[0][0], arr[1][0], arr[2][0]]).std(), np.array([arr[0][1], arr[1][1], arr[2][1]]).std(), np.array([arr[0][2], arr[1][2], arr[2][2]]).std()], #Columns
wholeArr.std()]; 

maximumValue = lambda arr, wholeArr: [[arr[0].max(), arr[1].max(), arr[2].max()], #Rows
[np.array([arr[0][0], arr[1][0], arr[2][0]]).max(), np.array([arr[0][1], arr[1][1], arr[2][1]]).max(), np.array([arr[0][2], arr[1][2], arr[2][2]]).max()], #Columns
wholeArr.max()]; 

minimumValue = lambda arr, wholeArr: [[arr[0].min(), arr[1].min(), arr[2].min()], #Rows
[np.array([arr[0][0], arr[1][0], arr[2][0]]).min(), np.array([arr[0][1], arr[1][1], arr[2][1]]).min(), np.array([arr[0][2], arr[1][2], arr[2][2]]).min()], #Columns
wholeArr.min()]; 

sumOfArr = lambda arr, wholeArr: [[arr[0].sum(), arr[1].sum(), arr[2].sum()], #Rows
[np.array([arr[0][0], arr[1][0], arr[2][0]]).sum(), np.array([arr[0][1], arr[1][1], arr[2][1]]).sum(), np.array([arr[0][2], arr[1][2], arr[2][2]]).sum()], #Columns
wholeArr.sum()]; 

def calculate(li):
    if (len(li) != 9):
        raise ValueError('List must contain nine numbers.');

    listForMath = [];
    temp_list = [];
    arr = np.array(li);
    increment = -1;

    for i in range(3):
        increment += 1; #Adds one to the for loop starting position and max value for the other values.
        for j in range(0 + increment, 9 + increment, 3):
            temp_list.append(arr[j]);
        listForMath.append(temp_list);
        temp_list = [];
    
    listForMath = np.array(listForMath); #For Numpy functions
    
    calculations = {
  'mean': mean(listForMath, arr),
  'variance': var(listForMath, arr),
  'standard deviation': standardDeviation(listForMath, arr),
  'max': maximumValue(listForMath, arr),
  'min': minimumValue(listForMath, arr),
  'sum': sumOfArr(listForMath, arr)
};

    return calculations;

print(calculate([0,1,2,3,4,5,6,7,8]));