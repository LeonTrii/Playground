import imapclient, pyzmail;

password = open('pass.txt','r').read();

connect = imapclient.IMAPClient('imap.gmail.com', ssl = True);
connect.login('', password);
connect.select_folder('INBOX', readonly = True);
#IDs = connect.search(["SINCE 28-Aug-2023"]); error?

for i in IDs:
    msg = connect.fetch(i, ['BODY[]', 'FLAGS']);
    msg = pyzmail.PyzMessage.factory(msg[i][b'BODY[]']);
    print(msg.get_subject());
    #msg.get_addresses('from');
