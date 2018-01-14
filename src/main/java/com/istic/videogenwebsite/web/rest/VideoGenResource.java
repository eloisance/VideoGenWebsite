package com.istic.videogenwebsite.web.rest;

import eloisance.VideoGenTest1;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

/**
 * REST controller for managing VideoGen.
 */
@RestController
@RequestMapping("/api")
public class VideoGenResource {

    private final Logger log = LoggerFactory.getLogger(VideoGenResource.class);

    public VideoGenResource() {

    }

    @GetMapping("videogen/random")
    public String generateRandomVariant() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        String filename = "data/input/videogen/" + timestamp.getTime() + ".videogen";
        log.debug("getRandomVariant at : " + filename);

        VideoGenTest1 videogen = new VideoGenTest1();
        videogen.generateRandomVideo();

        return filename;
    }

}
