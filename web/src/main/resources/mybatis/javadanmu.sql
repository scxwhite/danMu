/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost
 Source Database       : javadanmu

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : utf-8

 Date: 05/19/2018 11:54:57 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `danmu`
-- ----------------------------
DROP TABLE IF EXISTS `danmu`;
CREATE TABLE `danmu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` varchar(20) DEFAULT NULL,
  `msg` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
