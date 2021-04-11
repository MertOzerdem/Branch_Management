
USE branch_management;
CREATE TABLE branch (
    branch_id  int NOT NULL AUTO_INCREMENT,
    latitude INT UNSIGNED  DEFAULT '0000' NOT NULL,
    longitude INT UNSIGNED  DEFAULT '0000' NOT NULL,
    branch_name  CHAR(20)      DEFAULT ''     NOT NULL,
    full_address  CHAR(200)      DEFAULT ''     NOT NULL,
    phone   DECIMAL(11) DEFAULT '0.00' NOT NULL,
    PRIMARY KEY(branch_id));
INSERT INTO branch VALUES
    (1,123,321,'branch1','anadoludan kop gel düz git',02920292029),
    (2,1123,1321,'branch2','ankarayı geç sagdan',11110292029),
    (3,33,1,'branch2','avrupa yakası',11110292029);