package com.example.restik.exception;

public class ProjectException extends Exception {
    private Exception hiddenException;

    public ProjectException() {
        super();
    }

    public ProjectException(String message) {
        super(message);
    }

    public ProjectException(String message, Exception ex) {
        super(message);
        hiddenException = ex;
    }

    public Exception getHiddenException() {
        return hiddenException;
    }
}
