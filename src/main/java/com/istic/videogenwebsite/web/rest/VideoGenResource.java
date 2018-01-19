package com.istic.videogenwebsite.web.rest;

import eloisance.VideoGenTest1;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Timestamp;

/**
 * REST controller for managing VideoGen.
 */
@RestController
@RequestMapping("/api")
public class VideoGenResource {

    private final Logger log = LoggerFactory.getLogger(VideoGenResource.class);

    public VideoGenResource() { }

    @GetMapping(value = "videogen/random")
    public String generateRandomVariant() {
        VideoGenTest1 videogen = new VideoGenTest1();
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        String videoName = "video-" + timestamp.getTime() + ".mp4";

        // chemin du fichier .videogen
        String pathFileVideoGen = "./data/example2.videogen";

        // chemin du fichier playlist.txt pour ffmpeg
        String pathPlaylist = "./data/playlist.txt";

        // chemin vers le dossier des samples de vidéo (NB: par rapport au fichier playlist)
        String pathVideoLocation = "samples/";

        // chemin pour save la vidéo de ffmpeg
        String pathSaveVideo = "./data/" + videoName;

        // Démarre la génération de la vidéo !
        videogen.generateRandomVideo(pathFileVideoGen, pathPlaylist, pathVideoLocation, pathSaveVideo);

        return "{\"videoName\":\""+videoName+"\"}";
    }


    @GetMapping(value = "videogen/download/{videoName}")
    public String downloadVideo(@PathVariable("videoName") String videoName, HttpServletResponse response) {
        String base64 = "";
        try {
            base64 = DatatypeConverter.printBase64Binary(
                Files.readAllBytes(Paths.get("data/" + videoName + ".mp4"))
            );
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "{\"base64\":\""+base64+"\"}";
    }

}
