import PyPDF2;

path_one = 'excel-word-pdf/docs/6.3-The-Dreaded-Logistic-Differential-Equation-FRQ.pdf';
path_two = 'excel-word-pdf/docs/6.3-Logistic-Differential-Equation-AP-Quiz.pdf';

file_one = open(path_one, 'rb');
file_two = open(path_two, 'rb');

reader_one = PyPDF2.PdfReader(file_one);
reader_two = PyPDF2.PdfReader(file_two);
#pg = reader_one.numPages;
page = reader_one.pages[0];
text = page.extract_text();
print(text);
for i in range(len(reader_one.pages)):
    print(reader_one.pages[i].extract_text());
    
writer = PyPDF2.PdfWriter();

for j in range(len(reader_one.pages)):
    one = reader_one.pages[j];
    writer.add_page(one);
    
for j in range(len(reader_two.pages)):
    two = reader_two.pages[j];
    writer.add_page(two);
    
output = open('6.3.pdf', 'wb');
writer.write(output);
output.close();
file_one.close();
file_two.close();