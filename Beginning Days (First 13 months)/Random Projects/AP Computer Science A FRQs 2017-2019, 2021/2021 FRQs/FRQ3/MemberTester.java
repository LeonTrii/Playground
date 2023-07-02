package FRQ3;

import java.util.ArrayList;

public class MemberTester {
    public static void main(String[] args) {
        String[] members2020 = {"Nate", "John", "Izzy"};
        String[] members2021 = {"Jack", "Andrew", "Emily"};

        ClubMembers programmingClub = new ClubMembers();
        programmingClub.addMembers(members2020, 2020);
        programmingClub.addMembers(members2021, 2021);
        ArrayList<MemberInfo> memberList = new ArrayList<MemberInfo>(programmingClub.getMemberList());
        for (int k = 0; k < memberList.size(); k++) {
            System.out.println(memberList.get(k).getName());
            System.out.println(memberList.get(k).getGradYear());
            System.out.println(memberList.get(k).isGoodStanding());
            System.out.println("-----------------------------------");
        }

        System.out.println("Removed:");
        ArrayList<MemberInfo> removed = new ArrayList<MemberInfo>(programmingClub.removeMembers(2020));
        for (int k = 0; k < removed.size(); k++) {
            System.out.println(removed.get(k).getName());
            System.out.println(removed.get(k).getGradYear());
            System.out.println(removed.get(k).isGoodStanding());
            System.out.println("-----------------------------------");
        }
        
        System.out.println("Still in club:");
        ArrayList<MemberInfo> memberListUpdate = new ArrayList<MemberInfo>(programmingClub.getMemberList());
        for (int k = 0; k < memberListUpdate.size(); k++) {
            System.out.println(memberListUpdate.get(k).getName());
            System.out.println(memberListUpdate.get(k).getGradYear());
            System.out.println(memberListUpdate.get(k).isGoodStanding());
            System.out.println("-----------------------------------");
        }
        
    }
}
