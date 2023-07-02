/**
 * bank
 */
public class bank {

    public static void main(String[] args) {
        accounts Leon = new accounts("Leon Truong", "A43LP2"); 
        Leon.setInterest(1.2);
        //ID can only contain characters, numbers, and the length must be six.
        //Leon.getUser();
        //Leon.getID();
        Leon.openPanel();
    }
}