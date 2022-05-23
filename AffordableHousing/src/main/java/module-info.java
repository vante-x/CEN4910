module orlando.affordablehousing {
    requires javafx.controls;
    requires javafx.fxml;


    opens orlando.affordablehousing to javafx.fxml;
    exports orlando.affordablehousing;
}