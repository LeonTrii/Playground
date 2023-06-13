import openpyxl;

book = openpyxl.Workbook();
sheet = book.get_sheet_by_name("Sheet");
sheet["A1"] = 567890;
sheet["A2"] = "bruh";
sheet_two = book.create_sheet();
sheet_two.title = "new sheet";
book.save("idk.xlsx");