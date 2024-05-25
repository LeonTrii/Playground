#include <iostream>
#include <fstream>
using namespace std;

string isEven(int);

int main() {
    ofstream outFile("main.py");

    outFile << "def isEven();" << endl;
    outFile << "    if (n == 0):" << endl;
    outFile << "        return True" << endl;

    for (int i = 1; i < 10000000; i++) {
        outFile << "    elif (n == "<< i << "):" << endl;
        outFile << isEven(i) << endl;
    }

    return 0;
}

string isEven(int n) {
    if (n % 2 == 0) return "        return even";
    else return "       return odd";
}