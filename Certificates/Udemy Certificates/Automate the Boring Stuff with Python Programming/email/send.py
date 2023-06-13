import smtplib;

bruh = ['a', 'a', 'b', 'a', 'c', 'b', 'a'];

password = open('pass.txt','r').read();
connect = smtplib.SMTP('smtp.gmail.com', 587);
connect.ehlo();
connect.starttls();
connect.login('email', password);

for _ in range(0, 5):
    for i in bruh:
        connect.sendmail(
    'email',
    'email_to',
    f'Subject: idk\n\n{i}'
);

connect.quit();