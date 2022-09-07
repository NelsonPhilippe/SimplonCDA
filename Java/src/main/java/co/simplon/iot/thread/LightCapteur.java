package src.main.java.co.simplon.iot.thread;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.TimerTask;
import java.util.UUID;

public class LightCapteur extends TimerTask {

    private String uri;

    public LightCapteur(String uri) {
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
                        "\"name\" : \"9223cc31-d46d-42b4-9c80-600a1574180b\"," +
                        "\"light\" : \"24\"," +
                        "\"status\" : true"+
                        "}";
                os.write(json.getBytes("utf-8"));
            }

            System.out.println(http.getResponseCode());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
