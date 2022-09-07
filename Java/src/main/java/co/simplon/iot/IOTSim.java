package src.main.java.co.simplon.iot;

import src.main.java.co.simplon.iot.thread.LightCapteur;
import src.main.java.co.simplon.iot.thread.PresenceCapteur;
import src.main.java.co.simplon.iot.thread.ThermalCapteur;

import java.util.Timer;
import java.util.TimerTask;

public class IOTSim {

    public static void main(String[] args) {

        Timer timer_thermal = new Timer();
        TimerTask timerTaskThermal = new ThermalCapteur("http://127.0.0.1:3000/module/temperature");
        timer_thermal.scheduleAtFixedRate(timerTaskThermal, 0, 1000 * 60);

        Timer timer_light = new Timer();
        TimerTask timerTaskLight = new LightCapteur("http://127.0.0.1:3000/module/light");
        timer_light.scheduleAtFixedRate(timerTaskLight, 0, 1000 * 60);

        Timer timer_presence = new Timer();
        TimerTask timerTaskPresence = new PresenceCapteur("http://127.0.0.1:3000/module/presence");
        timer_presence.scheduleAtFixedRate(timerTaskPresence, 0, 1000 * 60);


    }

}
