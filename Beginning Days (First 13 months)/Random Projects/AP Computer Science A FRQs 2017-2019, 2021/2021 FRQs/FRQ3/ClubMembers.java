package FRQ3;

import java.util.ArrayList;

public class ClubMembers {
    private ArrayList<MemberInfo> memberList = new ArrayList<MemberInfo>();

    public ArrayList<MemberInfo> getMemberList() {
        //I added this method myself to test my code
        return memberList;
    }

    public void addMembers(String[] names, int gradYear) {
        for (String i: names) {
            MemberInfo member = new MemberInfo(i, gradYear, true);
            memberList.add(member);
        }
    }

    public ArrayList<MemberInfo> removeMembers(int year) {
        ArrayList<MemberInfo> arr = new ArrayList<MemberInfo>();

        for (int i = 0; i < memberList.size(); i++) {
            MemberInfo member = memberList.get(i);
            if (member.getGradYear() <= year) {
                memberList.remove(i);
            }

            if (member.getGradYear() <= year && member.isGoodStanding()) {
                arr.add(member);
            }
        }

        return arr;
    }


}
