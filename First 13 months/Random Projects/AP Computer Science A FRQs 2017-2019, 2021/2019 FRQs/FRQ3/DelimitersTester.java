import java.util.ArrayList;

public class DelimitersTester {
    public static void main(String[] args) {
        Delimiters header = new Delimiters("<h1>", "</h1>");
        String[] arr = {"<h1>", "<h2>", "<h1", "</h1>"};
        ArrayList<String> list = new ArrayList<String>(header.getDelimitersList(arr));
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
        System.out.println(header.isBalanced(list));
        list.add("<h1>");
        System.out.println(header.isBalanced(list));
    }
}
