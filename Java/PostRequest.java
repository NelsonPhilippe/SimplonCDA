import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.UUID;

public class PostRequest {

    public static void main(String[] args) throws IOException {

        URL url = new URL("http://example.com");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Content-Type", "application/json");
        con.setDoOutput(true);
        String jsonInputString = "{" +
                "\"name\" : \"" + UUID.randomUUID() + "\"," +
             "\"last_temp\" : \"24\"," +
                "\"states\" : \"true\""+
                "}";
        System.out.println(jsonInputString);

    }

}
