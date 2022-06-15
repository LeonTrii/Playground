import java.util.ArrayList;
import java.util.Arrays;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.ButtonType;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.scene.text.TextAlignment;
import javafx.stage.Stage;

public class Fridge extends Application implements EventHandler<ActionEvent> {

	private ArrayList<String> levelOneItems = new ArrayList<String>(Arrays.asList("Apple", "Apple", "Apple", "Apple", 
		"Apple", "Apple", "Apple", "Apple", 
		"Apple", "Apple", "Apple", "Apple", 
		"Apple", "Apple", "Apple", "Apple", 
		"Milk", "Milk", "Milk", "Milk",
		"Milk", "Milk", "Milk", "Milk",
		"Milk", "Milk", "Milk", "Milk",
		"Milk", "Milk", "Milk", "Milk",
		"Milk", "Milk", "Milk", "Milk",
		"Yogurt", "Yogurt", "Yogurt",
		"Yogurt", "Yogurt", "Yogurt",
		"Yogurt", "Yogurt", "Yogurt",
		"Yogurt", "Yogurt", "Yogurt"));

	private ArrayList<String> levelTwoItems = new ArrayList<String>(Arrays.asList(
			"BigSoda", "BigSoda", "BigSoda", "BigSoda", 
			"BigSoda", "BigSoda", "BigSoda", "BigSoda", 
			"Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Tomato", "Tomato", "Tomato", "Tomato", 
			"DozenEggs", "DozenEggs", "DozenEggs", "DozenEggs"));
	
	private ArrayList<String> levelThreeItems = new ArrayList<String>(Arrays.asList(
			"Water", "Water", "Water", "Water", "Water",
			"Water", "Water", "Water", "Water",
			"Apple", "Apple", "Apple",
			"Milk", "Milk", "Milk", "Milk", "Milk",
			"Milk", "Milk", "Milk", "Milk", "Milk",
			"DozenEggs", "DozenEggs", "DozenEggs", "DozenEggs",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Tomato", "Tomato", "Tomato", "Tomato", "Tomato",
			"Tomato", "Tomato", "Tomato","Tomato","Tomato",
			"Tomato","Tomato", "Tomato", "Tomato"));
	
	private ArrayList<String> levelFourItems = new ArrayList<String>(Arrays.asList(
			"DozenEggs", "DozenEggs", "DozenEggs", "DozenEggs",
			"Milk", "Milk", "Milk", "Milk",
			"Milk", "Milk", "Milk", "Milk",
			"Milk", "Milk", "Milk", "Milk", "Milk",
			"Apple", "Apple", "Apple", "Apple", "Apple",
			"Apple", "Apple", "Apple", "Apple",
			"BigSoda", "BigSoda", "BigSoda",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"Water", "Water", 
			"Tomato", "Tomato", "Tomato", "Tomato", 
			"Tomato", "Tomato", "Tomato"));
	
	private ArrayList<String> levelFiveItems = new ArrayList<String>(Arrays.asList(
			"Water", "Water", "Water", "Water", "Water",
			"Milk", "Milk", "Milk", 
			"Milk", "Milk", "Milk", 
			"Milk", "Milk", "Milk",
			"Apple", "Apple", "Apple", "Apple",
			"Apple", "Apple", "Apple",
			"BigSoda", "BigSoda", "BigSoda", "BigSoda", 
			"Tomato", "Tomato", "Tomato",
			"Tomato", "Tomato", "Tomato",
			"Yogurt", "Yogurt", "Yogurt", "Yogurt", "Yogurt",
			"DozenEggs", "DozenEggs", "DozenEggs", 
			"DozenEggs", "DozenEggs", "DozenEggs"));
	
	private ArrayList<ArrayList<String>> allLevels = new ArrayList<ArrayList<String>>(Arrays.asList(levelOneItems, levelTwoItems, levelThreeItems, levelFourItems, levelFiveItems));
	
	private ArrayList<ArrayList<String>> resetLevels = new ArrayList<ArrayList<String>>(Arrays.asList(levelOneItems, levelTwoItems, levelThreeItems, levelFourItems, levelFiveItems));
	
	//Amount of items in each level. Varies by level
	//Index 0: BigSoda; Index 1: Apple; Index 2: Milk; 
	//Index 3: Yogurt; Index 4: DozenEggs; Index 5: Tomato, Index 6: Water
	
	private String[] foodLabels = {"BigSoda", "Apple", "Milk", "Yogurt", "DozenEggs", "Tomato", "Water"};
	private String[] fridge;
	private String currentItem = "";
	private int[] listOfFood = {0, 0, 0, 0, 0, 0, 0};
	private int level = 0;
	private int cabinet = 0;
	private int amountOfItemsChosen = 0;
	private int foodIndex = -1;
	
	//Keeping tracks of nodes
	private TextField text;
	private Button button;
	private Text header;
	private Text rulesPrompt;
	private StackPane layout; 
	private ImageView imageView;
	private Alert notValidInput;
	private Text rulesText;
	private Text selectLevel;
	private ImageView fridge3d;
	private Text creatureText;
	private Text currentFridge;
	private Text enteringValues;
	private Text itemsAvailable;
	private Button reset;
	private Text ending;
	
	public static void main(String[] args) {
		launch(args);
	}

	@Override //This method takes the place of the main method
	public void start(Stage primaryStage) throws Exception {	
		
		primaryStage.setTitle("Fill Up the Fridge!");
		   
		layout = new StackPane();
	
		Scene scene = new Scene(layout, 800, 700);
		
		primaryStage.setScene(scene);
		primaryStage.show();
		
		//Art by Kiera
		Image fridgeImage = new Image("fridge.png");
		
		fridge3d = new ImageView(fridgeImage);
		fridge3d.maxWidth(800);
		fridge3d.maxHeight(800);
		
		Image image = new Image("creature.jpg");  
	    imageView = new ImageView(image); 
	    imageView.setTranslateY(-100);
		
		button = new Button("Submit");
		button.setOnAction(this); //Looking for the handle method in this class
		button.setTranslateY(270);
		button.setId("submit");
		button.setMinWidth(120);
		button.setFont(Font.font("Comic Sans MS", 18));
		
		reset = new Button("Reset");
		reset.setOnAction(this); 
		reset.setTranslateY(-300);
		reset.setId("reset");
		reset.setMinWidth(120);
		reset.setFont(Font.font("Comic Sans MS", 18));
		
		header = new Text("Welcome to Fill Up the Fridge!");
		header.setFont(Font.font("Comic Sans MS", 22));
		header.setFill(Color.WHITE);
		
		header.setId("header");
		header.setTranslateY(-300);
		
		rulesPrompt = new Text("Tab to navigate, you can press enter by using the spacebar\nWould you like to see how to play? (Y/N)");
		rulesPrompt.setTextAlignment(TextAlignment.CENTER);
		rulesPrompt.setFont(Font.font("Comic Sans MS", 20));
		rulesPrompt.setTranslateY(120);
		rulesPrompt.setFill(Color.WHITE);
		
		text = new TextField();
		text.setMaxWidth(140);
		text.setMaxHeight(40);
		text.setTranslateY(200);
		
		layout.getChildren().add(fridge3d);
		layout.getChildren().add(imageView);
		layout.getChildren().add(button);
		layout.getChildren().add(text);
		layout.getChildren().add(header);
		layout.getChildren().add(rulesPrompt);
	}
	
	@Override //Whenever the user clicks the button
	public void handle(ActionEvent event) {
		String eventString = event.toString();

		if (button.getId().equals("submit")) {
			rules();
		} else if (button.getId().equals("continue")) {
			startGame();
		} else if (button.getId().equals("start")) {
			try {
				int value = Integer.parseInt(text.getText().replaceAll("\\s", ""));
				if (value > 0 && value < 6) {
					startFridge(value);
					text.clear();
					button.setText("Continue");
				} else {
					throw new Exception("no");
				}
			} catch(Exception e) {
				notValidInput = new Alert(AlertType.ERROR, "Must enter a number between 1-5",ButtonType.APPLY);
				notValidInput.show();
				text.clear();
			}
		} else if (button.getId().equals("cabinet") && !eventString.equals("javafx.event.ActionEvent[source=Button[id=reset, styleClass=button]'Reset']")) {
			try {
				int value = Integer.parseInt(text.getText().replaceAll("\\s", ""));
				if (value > 0 && value < 4) {
					getItem(Integer.parseInt(text.getText()));
					text.clear();
				} else {
					throw new Exception("no");
				}
			} catch (Exception e) {
				notValidInput = new Alert(AlertType.ERROR, "Must enter a number between 1-3.",ButtonType.APPLY);
				notValidInput.show();
				text.clear();
			}
		} else if (button.getId().equals("items") && !eventString.equals("javafx.event.ActionEvent[source=Button[id=reset, styleClass=button]'Reset']")) {
			try {
				boolean execute = false;
				String value = text.getText().replaceAll("\\s", "").toLowerCase();
				if (value.indexOf("big") != -1) {
					currentItem = value.substring(0, 1).toUpperCase() + value.substring(1, 3) + value.substring(3, 4).toUpperCase() + value.substring(4);
				} else if (value.indexOf("eggs") != -1) {
					currentItem = value.substring(0, 1).toUpperCase() + value.substring(1, 5) + value.substring(5, 6).toUpperCase() + value.substring(6);
				} else {
					currentItem = value.substring(0, 1).toUpperCase() + value.substring(1);
				}
				
				for (int i = 0; i < allLevels.get(level - 1).size(); i++) {
					if (allLevels.get(level - 1).get(i).equals(currentItem)) {
						execute = true;
					}
				}
		
				if (execute) {
					if (currentItem.equals("Tomato")) {
						enteringValues.setText("How many " + currentItem + "es?");
					} else if (!currentItem.equals("DozenEggs")) {
						enteringValues.setText("How many " + currentItem + "s?");
					} else {
						enteringValues.setText("How many DozenEggs?");
					}
					text.clear();
					button.setId("checkItem");
				} else {
					throw new Exception("no");
				}
			} catch (Exception e) {
				notValidInput = new Alert(AlertType.ERROR, "Enter an item in the list.",ButtonType.APPLY);
				notValidInput.show();
				text.clear();
			}
		} else if (button.getId().equals("checkItem") && !eventString.equals("javafx.event.ActionEvent[source=Button[id=reset, styleClass=button]'Reset']")) {
			try {
				int index = Arrays.asList(foodLabels).indexOf(currentItem);
				amountOfItemsChosen = Integer.parseInt(text.getText().replaceAll("\\s", ""));
				foodIndex = index;
				if (amountOfItemsChosen > listOfFood[index]) {
					throw new Exception("no");
				}
				
				addItems();
			} catch(Exception e) {
				notValidInput = new Alert(AlertType.ERROR, "The amount must be equal to or less than the number of " + currentItem + "s.",ButtonType.APPLY);
				notValidInput.show();
				text.clear();
			}
		} else if (reset.getId().equals("reset") && eventString.equals("javafx.event.ActionEvent[source=Button[id=reset, styleClass=button]'Reset']")) {
			layout.getChildren().clear();
			layout.getChildren().add(fridge3d);
			layout.getChildren().add(button);
			layout.getChildren().add(text);
			
			for (int i = 0; i < listOfFood.length; i++) {
				listOfFood[i] = 0;
			}
			
			allLevels.set(level - 1, resetLevels.get(level - 1));
			button.setId("cabinet");
			
			startFridge(level);
		}
	}
	
	private void rules() {
		String response = text.getText().toLowerCase().replaceAll("\\s", "");
		
		if (!response.equals("y") && !response.equals("n")) {
			notValidInput = new Alert(AlertType.ERROR, "Must enter Y or N",ButtonType.APPLY);
			notValidInput.show();
			text.clear();
		} else if (response.equals("y")) {
			getRules();
		} else if (response.equals("n")) {
			startGame();
		}
		
		text.clear();
	}
	
	private void getRules() {
		rulesText = new Text("To win, the spaces on the left of the cabinet have to be 3 or 4.\r\n" + 
				"All items must be added to the fridge.\r\n" + 
				"Correct cabinet:\r\n" + 
				"|=============================||||||||||||||||||||||\r\n" + 
				"|   Apple Apple Apple Water   ||||||||||||||||||||||\r\n" + 
				"|   Apple Apple Apple Water   |||||||||||||||||||||| \r\n" + 
				"|   Apple Apple Apple Water   ||||||||||||||||||||||\r\n" + 
				"|   Apple Apple Apple Water   |||||||||||||||||||||| \r\n" + 
				"|=============================||||||||||||||||||||||\r\n" + 
				"Incorrect cabinet. It has 5 spaces on the right (should be 3 or 4):\r\n" + 
				"|=============================||||||||||||||||||||||\r\n" + 
				"|   Apple Water Milk Milk     ||||||||||||||||||||||\r\n" + 
				"|   Apple Water Milk Milk     ||||||||||||||||||||||\r\n" + 
				"|   Apple Water Milk Milk     ||||||||||||||||||||||\r\n" + 
				"|   Apple Water Milk Milk     ||||||||||||||||||||||\r\n" + 
				"|=============================||||||||||||||||||||||\r\n" + 
				"If the cabinet is full, no more items can be added.\r\n" +
				"The items are added row first and each row has 29 spaces.");
		
		rulesText.setFont(Font.font("Consolas", 15));
		rulesText.setTranslateY(-60);
		
		button.setText("Continue");
		button.setId("continue");
		
		layout.getChildren().remove(imageView);
		layout.getChildren().remove(header);
		layout.getChildren().remove(rulesPrompt);
		layout.getChildren().remove(text);
		layout.getChildren().remove(fridge3d);
		layout.getChildren().add(rulesText);
	}
	
	private void startGame() {
		selectLevel = new Text("Enter a level from 1 to 5");
		selectLevel.setFill(Color.WHITE);
		selectLevel.setFont(Font.font("Comic Sans MS", 20));
		selectLevel.setTranslateY(120);
		
		creatureText = new Text("La creatura!!!!");
		creatureText.setFill(Color.WHITE);
		creatureText.setFont(Font.font("Comic Sans MS", 20));
		creatureText.setTranslateY(-300);
		
		if (!layout.getChildren().contains(imageView)) {
			layout.getChildren().add(fridge3d);
			layout.getChildren().add(text);
			layout.getChildren().remove(button);
			layout.getChildren().add(button);

		}
		
		if (!layout.getChildren().contains(imageView)) {
			layout.getChildren().add(imageView);
		}
		
		layout.getChildren().remove(rulesText);
		layout.getChildren().remove(header);
		layout.getChildren().remove(rulesPrompt);
		
		button.setText("Start");
		button.setId("start");	
		layout.getChildren().add(creatureText);
		layout.getChildren().add(selectLevel);
	}
	
	private void startFridge(int level) {
		this.level = level;
		
		layout.getChildren().remove(imageView);
		layout.getChildren().remove(selectLevel);
		layout.getChildren().remove(creatureText);
		
		String[] fridgeArray = {"|=============================||||||||||||||||||||||\r\n",  
				"|                             ||||||||||||||||||||||\r\n",  
				"|                             ||||||||||||||||||||||\r\n", 
				"|                             ||||||||||||||||||||||\r\n", 
				"|                             ||||||||||||||||||||||\r\n",
				"|=============================||||||||||||||||||||||\r\n",
				"|                             ||||||||||||||||||||||\r\n",
				"|                             ||||||||||||||||||||||\r\n", 
				"|                             ||||||||||||||||||||||\r\n", 
				"|                             ||||||||||||||||||||||\r\n",
				"|=============================||||||||||||||||||||||\r\n",
				"|                             ||||||||||||||||||||||\r\n",
				"|                             ||||||||||||||||||||||\r\n",
				"|                             ||||||||||||||||||||||\r\n",
				"|                             ||||||||||||||||||||||\r\n", 
				"|=============================||||||||||||||||||||||\r\n"};
		
		fridge = fridgeArray;
		String fridgeString = "";
		
		for (String i: fridgeArray) {
			fridgeString += i;
		}
		
		currentFridge = new Text(fridgeString);
		currentFridge.setFont(Font.font("Consolas", 17));
		currentFridge.setFill(Color.WHITE);
		currentFridge.setTranslateY(-100);
		layout.getChildren().add(currentFridge);
		layout.getChildren().add(reset);
		getLevel();
	}
	
	private void getLevel() {
		button.setId("cabinet");
		text.clear();
		
		enteringValues = new Text("Which cabinet would you like to add items to? (1-3)");
		enteringValues.setFont(Font.font("Comic Sans MS", 17));
		enteringValues.setTranslateY(80);
		
		itemsAvailable = new Text(getItemsFromLevel(this.level));
		itemsAvailable.setFont(Font.font("Comic Sans MS", 17));
		itemsAvailable.setTranslateY(120);
		
		layout.getChildren().add(itemsAvailable);
		layout.getChildren().add(enteringValues);
	}
	
	private void getItem(int cabinet) {
		this.cabinet = cabinet;
		
		enteringValues.setText("Which item would you like to add? Enter the item in singular form.");
		button.setId("items");
	}
	
	private void addItems() {
		//Amount of items in each level. Varies by level
		//Index 0: BigSoda; Index 1: Apple; Index 2: Milk; 
		//Index 3: Yogurt; Index 4: DozenEggs; Index 5: Tomato, Index 6: Water
		//int[][] cabinetIndexes = {{1, 2, 3, 4}, {6, 7, 8, 9}, {11, 12, 13, 14}};
		int additionalIndex = 0;
		
		ArrayList<String> allItems = new ArrayList<>(allLevels.get(this.level - 1));
		
		if (cabinet == 2) {
			additionalIndex = 1;
		} else if (cabinet == 3) {
			additionalIndex = 2;
		}
		
		char[] itemChar = currentItem.toCharArray();
		char[] rowOne = fridge[1 + ((cabinet - 1) * 4) + additionalIndex].toCharArray();
		char[] rowTwo = fridge[2 + ((cabinet - 1) * 4) + additionalIndex].toCharArray();
		char[] rowThree = fridge[3 + ((cabinet - 1) * 4) + additionalIndex].toCharArray();
		char[] rowFour = fridge[4 + ((cabinet - 1) * 4) + additionalIndex].toCharArray();
		int itemCount = 0;
		boolean execute = true;
		boolean rowOneFull = false;
		boolean rowTwoFull = false;
		boolean rowThreeFull = false;
		
		for (int i = 4; i < 29; i++) {
			if (!(rowOne[currentItem.length() + i] == '|') && itemCount < amountOfItemsChosen && checkSpace(rowOne, i) && rowOne[i - 1] == ' ') {
				for (int j = 0; j < currentItem.length(); j++) {
					rowOne[i + j] = itemChar[j];
				}
				itemCount++;
				i += currentItem.length();
				allItems.remove(currentItem);
			} else if (execute) {
				execute = false;
				rowOneFull = true;
			}
		}
		
		execute = true;
		for (int i = 4; i < 29; i++) {
			if (!(rowTwo[currentItem.length() + i] == '|') && itemCount < amountOfItemsChosen && checkSpace(rowTwo, i) && rowOneFull && rowTwo[i - 1] == ' ') {
				for (int j = 0; j < currentItem.length(); j++) {
					rowTwo[i + j] = itemChar[j];
				}
				itemCount++;
				i += currentItem.length();
				allItems.remove(currentItem);
			} else if (execute) {
				execute = false;
				rowTwoFull = true;
			}
		}
		
		execute = true;
		for (int i = 4; i < 29; i++) {
			if (!(rowThree[currentItem.length() + i] == '|') && itemCount < amountOfItemsChosen && checkSpace(rowThree, i) && rowTwoFull && rowThree[i - 1] == ' ') {
				for (int j = 0; j < currentItem.length(); j++) {
					rowThree[i + j] = itemChar[j];
				}
				itemCount++;
				i += currentItem.length();
				allItems.remove(currentItem);
			} else if (execute) {
				execute = false;
				rowThreeFull = true;
			}
		}
		
		execute = true;
		for (int i = 4; i < 29; i++) {
			if (!(rowFour[currentItem.length() + i] == '|') && itemCount < amountOfItemsChosen && checkSpace(rowFour, i) && rowThreeFull && rowFour[i - 1] == ' ') {
				for (int j = 0; j < currentItem.length(); j++) {
					rowFour[i + j] = itemChar[j];
				}
				itemCount++;
				i += currentItem.length();
				allItems.remove(currentItem);
			} 
		}
		
		fridge[1 + ((cabinet - 1) * 4) + additionalIndex] = new String(rowOne);
		fridge[2 + ((cabinet - 1) * 4) + additionalIndex] = new String(rowTwo);
		fridge[3 + ((cabinet - 1) * 4) + additionalIndex] = new String(rowThree);
		fridge[4 + ((cabinet - 1) * 4) + additionalIndex] = new String(rowFour);
		
		String fridgeString = "";
		
		for (String s: fridge) {
			fridgeString += s;
		}
		
		currentFridge.setText(fridgeString);
		
		layout.getChildren().remove(enteringValues);
		layout.getChildren().remove(itemsAvailable);
		listOfFood[foodIndex] = listOfFood[foodIndex] - itemCount;
		
		allLevels.set(level - 1, allItems);
		
		for (int i = 0; i < listOfFood.length; i++) {
			listOfFood[i] = 0;
		}
		
		if (!checkWin()) {
			getLevel();
		}
	}	
	
	private boolean checkSpace(char[] row, int index) {
		String rowString = String.valueOf(row);
		return rowString.substring(index, index + 2).equals("  ");
	}
	
	private boolean checkWin() {
		boolean win = false;
		boolean lose = false;
		int count = 0;
		int countRowsPassed = 0;
		
		//Loop through entire fridge 
		//Loop through row 
		//Find 3 or 4 spaces
		//Skip rows 0, 5, 10, 15
		
		for (int i = 0; i < fridge.length; i++) {
			for (int j = 25; j < 30; j++) {
				char[] charArray = fridge[i].toCharArray();
				if (i != 0 && i != 5 && i != 10 && i != 15 && charArray[j] == ' ') {
					count++;
				}
			}
			
			if (count == 3 || count == 4 || count == 0 && countRowsPassed == 12) {
				win = true;
			}
			
			if (count < 3 && count != 0) {
				lose = true;
			}
			
			if (count == 5) {
				win = false;
			}
			
			if (count == 3 || count == 4 && count != 0) {
				countRowsPassed++;
			}
			
			count = 0;
		}
		if (win && countRowsPassed == 12) {
			layout.getChildren().clear();
			
			Image image = new Image("confetti.gif");  
		    imageView = new ImageView(image); 
		    
		    ending = new Text("You won!!!!!!!!!!!!!");
		    ending.setTextAlignment(TextAlignment.CENTER);
		    ending.setFont(Font.font("Comic Sans MS", 20));
		    ending.setTranslateY(-120);
			
			layout.getChildren().add(ending);
			layout.getChildren().add(imageView);
		} else if (lose || countRowsPassed == 12) {
			layout.getChildren().clear();
			
			Image image = new Image("creatureLose.jpg");  
		    imageView = new ImageView(image); 
		    
		    ending = new Text("You lost!!!! I won't show why you lost because you don't deserve to improve.");
		    ending.setTextAlignment(TextAlignment.CENTER);
		    ending.setFont(Font.font("Comic Sans MS", 20));
		    ending.setTranslateY(-220);
			
			layout.getChildren().add(ending);
			layout.getChildren().add(imageView);
		} 

		return lose | win;
	}
	
	private String getItemsFromLevel(int level) {
		int indexOfLastItem = 0;
		String items = "You have ";
		int count = 0;
		for (int n = 0; n < allLevels.get(level - 1).size(); n++) {
			ArrayList<String> foodList = new ArrayList<>(allLevels.get(level - 1));
			switch (foodList.get(n)) {
			//Index 0: BigSoda; Index 1: Apple; Index 2: Milk; 
			//Index 3: Yogurt; Index 4: DozenEggs; Index 5: Tomato, Index 6: Water
			case "BigSoda":
				listOfFood[0]++;
				break;
			case "Apple":
				listOfFood[1]++;
				break;
			case "Milk":
				listOfFood[2]++;
				break;
			case "Yogurt":
				listOfFood[3]++;
				break;
			case "DozenEggs":
				listOfFood[4]++;
				break;
			case "Tomato":
				listOfFood[5]++;
				break;
			case "Water":
				listOfFood[6]++;
				break;
			}
		}
		
		//Finding the last food item to add "and"
		for (int k = 0; k < listOfFood.length; k++) {
			if (listOfFood[k] != 0 && k > indexOfLastItem) {
				indexOfLastItem = k;
				count++;
			}
		}
		
		if (count == 1) {
			indexOfLastItem = -1;
		}
		
		for (int k = 0; k < 2; k++) { //Words that might have an s at the end
			if (k != indexOfLastItem) {
				if (indexOfLastItem == -1 && listOfFood[k] > 1) {
					items += listOfFood[k] + " " + foodLabels[k] + "s.";
				} else if (indexOfLastItem == -1 && listOfFood[k] == 1) {
					items += listOfFood[k] + " " + foodLabels[k] + ".";
				} else if (listOfFood[k] == 1) {
					items += listOfFood[k] + " " + foodLabels[k] + ", ";
				} else if (listOfFood[k] > 1) {
					items += listOfFood[k] + " " + foodLabels[k] + "s, ";
				}
			}
		}
		
		for (int x = 2; x < listOfFood.length; x++) {
			if (x != indexOfLastItem) {
				if (foodLabels[x].equals("Tomato") && listOfFood[x] > 1 && indexOfLastItem > -1) {
					items += listOfFood[x] + " Tomatoes.";
				} else if (foodLabels[x].equals("Tomato") && listOfFood[x] > 1 && indexOfLastItem == -1) {
					items += listOfFood[x] + " Tomato.";
				} else if (foodLabels[x].equals("Tomato") && listOfFood[x] > 1) {
					items += listOfFood[x] + " Tomatoes, ";
				} else if (listOfFood[x] > 1 && indexOfLastItem == -1) {
					items += listOfFood[x] + " " + foodLabels[x] + ".";
				} else if (listOfFood[x] > 1) {
					items += listOfFood[x] + " " + foodLabels[x] + ", ";
				} 
			}
		}
		
		if (indexOfLastItem != -1) {
			if (listOfFood[indexOfLastItem] > 1 && foodLabels[indexOfLastItem].equals("Tomato")) {
				items += "and " + listOfFood[indexOfLastItem] + " Tomatoes.";
			} else if (listOfFood[indexOfLastItem] > 1 && indexOfLastItem < 2) {
				items += "and " + listOfFood[indexOfLastItem] + "s.";
			} else if (listOfFood[indexOfLastItem] > 1) {
				items += "and " + listOfFood[indexOfLastItem] + " " + foodLabels[indexOfLastItem] + ".";
			}
		}

		return items;
	}
	
}

