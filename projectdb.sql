CREATE DATABASE  IF NOT EXISTS `projectdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projectdb`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: projectdb
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `aid` int NOT NULL,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`aid`),
  KEY `FK6mn0a3uw08exl4cbxj78j872l` (`loginid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,31);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `bid` int NOT NULL AUTO_INCREMENT,
  `fdate` date DEFAULT NULL,
  `tdate` date DEFAULT NULL,
  `destto` varchar(45) DEFAULT NULL,
  `destfrom` varchar(45) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `vid` int DEFAULT NULL,
  PRIMARY KEY (`bid`),
  KEY `vid_idx` (`vid`),
  CONSTRAINT `vid` FOREIGN KEY (`vid`) REFERENCES `vehicle` (`vid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'2021-09-03','2021-09-04','pune','mumbai','2021-09-02 12:30:15',1),(2,'2021-09-05','2021-09-06','mumbai','nagpur','2021-09-03 18:00:30',1),(3,'2021-09-01','2021-09-03','mumbai','pune','2021-09-22 06:41:59',1),(11,'2021-09-25','2021-09-27','mumbai','pune','2021-09-25 04:47:35',1),(13,'2021-09-26','2021-09-30','mumbai','pune','2021-09-25 12:09:47',1),(14,'2021-09-26','2021-09-29','mumbai','pune','2021-09-25 12:13:09',1),(15,'2021-09-26','2021-09-27','aurangabad','pune','2021-09-25 14:23:00',39),(16,'2021-09-29','2021-09-30','mumbai','pune','2021-09-25 17:26:37',1),(17,'2021-09-27','2021-09-28','mumbai','pune','2021-09-25 19:16:32',44),(18,'2021-09-27','2021-09-28','mumbai','pune','2021-09-25 19:30:08',45),(19,'2021-09-27','2021-09-28','pune','mumbai','2021-09-26 09:53:09',48),(20,'2021-09-28','2021-09-29','mumbai','pune','2021-09-26 10:23:32',36),(21,'2021-09-27','2021-09-28','aurangabad','pune','2021-09-26 10:24:29',40),(22,'2021-09-27','2021-09-28','pune','pune','2021-09-26 10:25:59',45),(23,'2021-09-24','2021-09-13','mumbai','pune','2021-09-26 10:28:28',40),(24,'2021-09-29','2021-09-30','mumbai','pune','2021-09-26 10:32:42',1),(25,'2021-09-29','2021-09-30','mumbai','pune','2021-09-26 10:34:25',45),(26,'2021-09-29','2021-09-30','mumbai','pune','2021-09-26 10:38:47',1),(27,'2021-09-29','2021-09-30','mumbai','pune','2021-09-26 10:57:22',41);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `contactno` varchar(45) DEFAULT NULL,
  `licenceno` varchar(45) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `loginid_idx` (`loginid`),
  CONSTRAINT `loginid` FOREIGN KEY (`loginid`) REFERENCES `login` (`loginid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Mayur','Sawant','mayur31@gmail.com','Mumbai','Male','756421398','MH02 201734950336',2),(2,'Nikita','Thombre','nikita03@gmail.com','Nagpur','Female','865423795','MH49 201823456124',4),(7,'Raj','Sharma','raj@gmail.com','Pune','Male','987437443','MH02 2324343422',NULL),(8,'Ram4','vharma','ram@gmail.com','Dubai','Male','955537443','3434332435',12),(9,'Raje','dsadsad','SDsdsd@gmail.com','dasdsjdnj','Male','2','676565756756',13),(15,'aisha','sharma','aisha123@gmail.com','12,nakshatra chs,402,mumbai,400012','Female','9989989999','MH-1220050000233',33),(16,'rohit','kanhe','rohit@gmail.com','Plot no.74 raut wadi ,amravati','Male','9876543217','MH-1220050004276',37),(17,'priya','bhoyar','priya01@gmail.com','12, Ram villa, Kokan','Female','7564231254','MH-1220055012456',39),(18,'Ram','Patil','patil@gmail.com','12,civil lines Nagpur','Male','7563214587','MH-1220055642132',41),(19,'kaustubh','shinde','abc@gmail.com','pune','Male','9404180932','MH-1220050000188',43);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(45) DEFAULT NULL,
  `pwd` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`loginid`),
  UNIQUE KEY `uname_UNIQUE` (`uname`),
  UNIQUE KEY `pwd_UNIQUE` (`pwd`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'mohinee','mohinee@123','owner'),(2,'mayur','mayur@123','customer'),(3,'nikhil','nikhil@123','owner'),(4,'nikita','nikita@123','customer'),(5,'Raj12','Raj12','customer'),(7,'Raj123','Raj123','customer'),(8,'Raj1234','Raj1234','customer'),(9,'Raj12345','Raj12345','customer'),(10,'Raj1234567','Raj1234567','customer'),(11,'Ram123','Ram123','owner'),(12,'Ram1234','Ram1234','customer'),(13,'Raje23','Raje123','customer'),(16,'Ram176234','Ram1234344','owner'),(17,'Ram17677234','Ram123784344','owner'),(18,'Sham','sham123','customer'),(19,'ashwnin','ashwini123','owner'),(21,'nikita1234','nikita1234','customer'),(22,'Nikhil123','Nikhil123','owner'),(25,'Ram2335435','Ram123434324','customer'),(26,'rajesh','rajesh123','customer'),(27,'Rohan12','Rohan@123','customer'),(29,'Divyanka123','Divyanka@12','customer'),(30,'Jethalal05','Jetha@1233','owner'),(31,'admin','admin@123','admin'),(32,'Nikita01','nikita@0311','owner'),(33,'aisha','aisha@123','customer'),(34,'prachi','prachi@123','owner'),(35,'kishor','kishor@123','owner'),(36,'Mayuri','mayuri@123','owner'),(37,'rohit','rohit@123','customer'),(38,'pooja','pooja@123','owner'),(39,'Priya09','priya@123','customer'),(40,'Rahul','rahul@123','owner'),(41,'Ram','ram@123','customer'),(43,'kaustubh','Asdf@123','customer');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `contactno` varchar(45) DEFAULT NULL,
  `adharno` varchar(45) DEFAULT NULL,
  `loginid` int DEFAULT NULL,
  PRIMARY KEY (`oid`),
  KEY `loginid_idx` (`loginid`),
  CONSTRAINT `loginid_owner` FOREIGN KEY (`loginid`) REFERENCES `login` (`loginid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (1,'Mohinee','Mankar','mohinee25@gmail.com','Amravati','Female','956314257','1234 5678 9000',1),(2,'Nikhil','Sonawane','nikhil23@gmail.com','Aurangabad','Male','864523756','4561 2389 7624',3),(3,'Ram','vharma','ram@gmail.com','Dubai','Male','955537443','3434332435',NULL),(4,'Ram4','vharma','ram@gmail.com','Dubai','Male','955537443',NULL,16),(5,'Ram4','vharma','ram@gmail.com','Dubai','Male','955537443','3434332435',17),(6,'ashwini','pandey','ash@gmail.com','mumbai','Female','99837378','9474647',19),(9,'Nikita','patel','niki02@gmail.com','12,pune','Female','8653214754','534657864521',32),(10,'prachi','verma','prachi123@gmail.com','om residency,1101,dadar,mumbai-400012','Female','9998595954','854435453454',34),(11,'kishor','Danawale','kishor@gmail.com','RX-5/17, Bajajnagar, aurangabad.','Male','9595989848','571654623654',35),(12,'Mayuri','kale','mayuri@gmail.com','plot no-15,Gadge nagar, amravati','Female','9850546451','534657862448',36),(13,'pooja','kale','pooja@gmail.com','shiv nagar ,nagpur','Female','9786543168','534657862458',38),(14,'Rahul','Deokar','rahul@gmail.com','mhasoba nagar, aurangabad.','Male','9423782172','890004542115',40);
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `bid` int DEFAULT NULL,
  `cid` int DEFAULT NULL,
  `tamt` double DEFAULT NULL,
  `mode` varchar(45) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`tid`),
  KEY `bid_idx` (`bid`),
  KEY `cid_idx` (`cid`),
  CONSTRAINT `bid` FOREIGN KEY (`bid`) REFERENCES `booking` (`bid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cid` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,2,1,1000,'GPay','2021-09-03 18:00:30'),(8,11,1,3000,'GPay','2021-09-25 04:47:54'),(9,14,1,1500,'GPay','2021-09-25 09:18:00'),(10,13,15,6000,'GPay','2021-09-25 12:11:52'),(11,14,15,4500,'GPay','2021-09-25 12:13:15'),(12,15,1,700,'upi','2021-09-25 14:23:07'),(13,16,16,1500,'GPay','2021-09-25 17:26:54'),(14,17,17,700,'upi','2021-09-25 19:16:40'),(15,18,1,1500,'upi','2021-09-25 19:30:14'),(16,19,1,700,'GPay','2021-09-26 09:53:13'),(17,20,19,700,'upi','2021-09-26 10:23:39'),(18,21,19,1500,'upi','2021-09-26 10:24:44'),(19,22,19,1500,'Credit Card','2021-09-26 10:26:07'),(20,23,19,16500,'Credit Card','2021-09-26 10:29:00'),(21,24,19,1500,'GPay','2021-09-26 10:32:49'),(22,25,19,1500,'GPay','2021-09-26 10:34:30'),(23,26,1,1500,'Credit Card','2021-09-26 10:38:53'),(24,27,1,700,'GPay','2021-09-26 10:58:37');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `vid` int NOT NULL AUTO_INCREMENT,
  `vno` varchar(45) DEFAULT NULL,
  `vname` varchar(45) DEFAULT NULL,
  `vtype` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `insurence` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `oid` int DEFAULT NULL,
  PRIMARY KEY (`vid`),
  KEY `oid_idx` (`oid`),
  CONSTRAINT `oid` FOREIGN KEY (`oid`) REFERENCES `owner` (`oid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'MH-01 CG4532','suzuki','car','mumbai','mini','12436878951','honda.jpg',1),(36,'MH01gf3323','Honda CBR650','bike','mumbai','sports bike','57458754574959454','C:\\fakepath\\a.jpeg',10),(39,'mH20ED113','Pulsar','bike','Aurangabad','sports bike','1453565814562','C:\\fakepath\\index3.png',11),(40,'mH20DV0102','Beat','car','Aurangabad','mini','256145523252','C:\\fakepath\\index5.jpg',10),(41,'MH04DJ2625','Royal Enfield','bike','mumbai','cruiser bike','25123961482','C:\\fakepath\\c.jpeg',1),(44,'MH30MN1253','Wego','bike','NAGPUR','scooter','254964268924','C:\\fakepath\\index6.png',12),(45,'MH27BJ3054','Swift','car','NAGPUR','mini','15694625455','C:\\fakepath\\index1.png',12),(46,'MH31 GF9876','Activa','bike','Dhule','scooter','78451985485','C:\\fakepath\\headerlogo.png',13),(47,'MH20DE3235','I20','car','Aurangabad','mini','442321546132','',14),(48,'MH01 GF9856','Pleasure','bike','pune','scooter','85423165478542','C:\\fakepath\\index3.png',11);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-27 14:20:17
