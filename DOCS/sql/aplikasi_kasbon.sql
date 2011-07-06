--
-- Copyright (C) 2011 ArtiVisi Intermedia <info@artivisi.com>
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--         http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.
--
-- MySQL dump 10.13  Distrib 5.1.41, for debian-linux-gnu (i486)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.1.41-3ubuntu12.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `m_pegawai`
--

DROP TABLE IF EXISTS `m_pegawai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `m_pegawai` (
  `nip` varchar(8) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `jabatan` varchar(50) NOT NULL,
  `no_hp1` varchar(12) DEFAULT NULL,
  `no_hp2` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`nip`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_pegawai`
--

LOCK TABLES `m_pegawai` WRITE;
/*!40000 ALTER TABLE `m_pegawai` DISABLE KEYS */;
/*!40000 ALTER TABLE `m_pegawai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saldo_kasbon`
--

DROP TABLE IF EXISTS `saldo_kasbon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saldo_kasbon` (
  `id_saldo_kasbon` bigint(20) NOT NULL,
  `nip` varchar(8) NOT NULL,
  `saldo` double NOT NULL,
  PRIMARY KEY (`id_saldo_kasbon`),
  KEY `fk_saldo_kasbon_m_pegawai1` (`nip`),
  CONSTRAINT `fk_saldo_kasbon_m_pegawai1` FOREIGN KEY (`nip`) REFERENCES `m_pegawai` (`nip`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldo_kasbon`
--

LOCK TABLES `saldo_kasbon` WRITE;
/*!40000 ALTER TABLE `saldo_kasbon` DISABLE KEYS */;
/*!40000 ALTER TABLE `saldo_kasbon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_permission`
--

DROP TABLE IF EXISTS `sec_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sec_permission` (
  `id_permission` bigint(20) NOT NULL,
  `permission_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_permission`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_permission`
--

LOCK TABLES `sec_permission` WRITE;
/*!40000 ALTER TABLE `sec_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_role`
--

DROP TABLE IF EXISTS `sec_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sec_role` (
  `id_role` bigint(20) NOT NULL,
  `rolename` varchar(25) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_role`
--

LOCK TABLES `sec_role` WRITE;
/*!40000 ALTER TABLE `sec_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_role_has_sec_permission`
--

DROP TABLE IF EXISTS `sec_role_has_sec_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sec_role_has_sec_permission` (
  `sec_role_id_role` bigint(20) NOT NULL,
  `sec_permission_id_permission` bigint(20) NOT NULL,
  PRIMARY KEY (`sec_role_id_role`,`sec_permission_id_permission`),
  KEY `fk_sec_role_has_sec_permission_sec_permission1` (`sec_permission_id_permission`),
  CONSTRAINT `fk_sec_role_has_sec_permission_sec_role1` FOREIGN KEY (`sec_role_id_role`) REFERENCES `sec_role` (`id_role`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_sec_role_has_sec_permission_sec_permission1` FOREIGN KEY (`sec_permission_id_permission`) REFERENCES `sec_permission` (`id_permission`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_role_has_sec_permission`
--

LOCK TABLES `sec_role_has_sec_permission` WRITE;
/*!40000 ALTER TABLE `sec_role_has_sec_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_role_has_sec_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sec_user`
--

DROP TABLE IF EXISTS `sec_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sec_user` (
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nip` varchar(8) NOT NULL,
  `id_role` bigint(20) NOT NULL,
  PRIMARY KEY (`username`),
  KEY `fk_sec_user_m_pegawai1` (`nip`),
  KEY `fk_sec_user_sec_role1` (`id_role`),
  CONSTRAINT `fk_sec_user_m_pegawai1` FOREIGN KEY (`nip`) REFERENCES `m_pegawai` (`nip`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_sec_user_sec_role1` FOREIGN KEY (`id_role`) REFERENCES `sec_role` (`id_role`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sec_user`
--

LOCK TABLES `sec_user` WRITE;
/*!40000 ALTER TABLE `sec_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `sec_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_pembayaran_kasbon`
--

DROP TABLE IF EXISTS `t_pembayaran_kasbon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_pembayaran_kasbon` (
  `id_pembayaran_kasbon` bigint(20) NOT NULL,
  `tgl_pembayaran` date NOT NULL,
  `nip` varchar(8) NOT NULL,
  `nilai` double NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `created_by` varchar(8) NOT NULL,
  `id_pengajuan_kasbon` bigint(20) NOT NULL,
  PRIMARY KEY (`id_pembayaran_kasbon`),
  KEY `fk_t_pembayaran_kasbon_m_pegawai1` (`nip`),
  KEY `fk_t_pembayaran_kasbon_t_pengajuan_kasbon1` (`id_pengajuan_kasbon`),
  KEY `fk_t_pembayaran_kasbon_sec_user1` (`created_by`),
  CONSTRAINT `fk_t_pembayaran_kasbon_m_pegawai1` FOREIGN KEY (`nip`) REFERENCES `m_pegawai` (`nip`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_pembayaran_kasbon_t_pengajuan_kasbon1` FOREIGN KEY (`id_pengajuan_kasbon`) REFERENCES `t_pengajuan_kasbon` (`id_pengajuan_kasbon`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_pembayaran_kasbon_sec_user1` FOREIGN KEY (`created_by`) REFERENCES `sec_user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_pembayaran_kasbon`
--

LOCK TABLES `t_pembayaran_kasbon` WRITE;
/*!40000 ALTER TABLE `t_pembayaran_kasbon` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_pembayaran_kasbon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_pencairan_kasbon`
--

DROP TABLE IF EXISTS `t_pencairan_kasbon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_pencairan_kasbon` (
  `id_pencairan_kasbon` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_pengajuan_kasbon` bigint(20) NOT NULL,
  `tgl_pencairan` date NOT NULL,
  `nilai` double NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `created_by` varchar(8) NOT NULL,
  PRIMARY KEY (`id_pencairan_kasbon`),
  KEY `fk_t_pencairan_kasbon_t_pengajuan_kasbon1` (`id_pengajuan_kasbon`),
  KEY `fk_t_pencairan_kasbon_sec_user1` (`created_by`),
  CONSTRAINT `fk_t_pencairan_kasbon_t_pengajuan_kasbon1` FOREIGN KEY (`id_pengajuan_kasbon`) REFERENCES `t_pengajuan_kasbon` (`id_pengajuan_kasbon`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_pencairan_kasbon_sec_user1` FOREIGN KEY (`created_by`) REFERENCES `sec_user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_pencairan_kasbon`
--

LOCK TABLES `t_pencairan_kasbon` WRITE;
/*!40000 ALTER TABLE `t_pencairan_kasbon` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_pencairan_kasbon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_pengajuan_kasbon`
--

DROP TABLE IF EXISTS `t_pengajuan_kasbon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_pengajuan_kasbon` (
  `id_pengajuan_kasbon` bigint(20) NOT NULL AUTO_INCREMENT,
  `tgl_pengajuan` date NOT NULL,
  `nip` varchar(8) NOT NULL,
  `nilai` double NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `is_approve` tinyint(1) DEFAULT NULL,
  `approve_date` date DEFAULT NULL,
  `approved_by` varchar(8) DEFAULT NULL,
  `created_by` varchar(8) NOT NULL,
  PRIMARY KEY (`id_pengajuan_kasbon`),
  KEY `fk_t_pengajuan_kasbon_sec_user1` (`approved_by`),
  KEY `fk_t_pengajuan_kasbon_sec_user2` (`created_by`),
  KEY `fk_t_pengajuan_kasbon_m_pegawai` (`nip`),
  CONSTRAINT `fk_t_pengajuan_kasbon_m_pegawai` FOREIGN KEY (`nip`) REFERENCES `m_pegawai` (`nip`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_pengajuan_kasbon_sec_user1` FOREIGN KEY (`approved_by`) REFERENCES `sec_user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_pengajuan_kasbon_sec_user2` FOREIGN KEY (`created_by`) REFERENCES `sec_user` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_pengajuan_kasbon`
--

LOCK TABLES `t_pengajuan_kasbon` WRITE;
/*!40000 ALTER TABLE `t_pengajuan_kasbon` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_pengajuan_kasbon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-07-01 14:16:13
