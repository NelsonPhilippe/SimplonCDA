package src.main.java.co.simplon.iot.thread;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.TimerTask;
import java.util.UUID;

public class ThermalCapteur extends TimerTask {

    private String uri;

    public ThermalCapteur(String uri) {
        this.uri = uri;
    }

    @Override
    public void run() {
        try {
            URL url = new URL(uri);
            HttpURLConnection http = (HttpURLConnection)  url.openConnection();
            http.setRequestProperty("Content-Type", "application/json");
            http.setRequestProperty("Accept", "application/json");
            http.setRequestMethod("POST");
            http.setDoOutput(true);

            try(OutputStream os = http.getOutputStream()){
                String json = "{" +
                        "\"name\" : \"56aa8cd4-dca7-411b-b182-3b94eb5d23b1\"," +
                        "\"temperature\" : \"24\"," +
                        "\"status\" : \"true\""+
                        "}";
                os.write(json.getBytes("utf-8"));
            }

            System.out.println(http.getResponseCode());


        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
