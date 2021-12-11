import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout; //packages for gui
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.border.Border;
import javax.swing.JPasswordField;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import java.awt.*;

public class window implements ActionListener {
    private JFrame frame;
    private JPanel panel;
    private JButton roll;
    private JTextField min;
    private JTextField max;
    private JLabel label;
    public window() {
        frame = new JFrame();
        panel = new JPanel();
        roll = new JButton("Roll");
        roll.setSize(2000, 20);
        roll.addActionListener(this);
        min = new JTextField(30);

        panel.setLayout(new GridLayout(0, 1));
        panel.setBackground(Color.decode("#fdfdfd"));
        panel.setBorder(BorderFactory.createEmptyBorder(200, 200, 20, 200));
        frame.add(panel, BorderLayout.CENTER);
        panel.add(roll);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("Hello World");
        frame.pack();
        frame.setVisible(true);
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        
        
    }
}
