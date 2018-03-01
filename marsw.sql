-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 01, 2018 at 08:44 PM
-- Server version: 5.7.19
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `marsw`
--

-- --------------------------------------------------------

--
-- Table structure for table `incentive`
--

CREATE TABLE `incentive` (
  `id` int(10) NOT NULL,
  `title` varchar(25) NOT NULL,
  `description` varchar(40) NOT NULL,
  `points` int(4) NOT NULL,
  `instructor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `incentive`
--

INSERT INTO `incentive` (`id`, `title`, `description`, `points`, `instructor`) VALUES
(2, '$request->getPa;', ' ', 234, 34),
(3, '$request->getPa;', 'add', 234, 34),
(5, '$request->getPa;', 'add', 234, 34),
(6, '$request->getPa;', 'add', 234, 34),
(7, '$request->getPa;', 'add', 234, 34),
(8, '$request->getPa;', 'add', 234, 34),
(9, '$request->getPa;', 'add', 234, 34),
(10, '$request->getPa;', 'add', 234, 34),
(11, '$request->getPa;', 'add', 234, 34),
(12, '$request->getPa;', 'add', 234, 34),
(13, '$request->getPa;', 'add', 234, 34),
(14, '$request->getPa;', 'add', 234, 34),
(15, '$request->getPa;', 'add', 234, 34),
(16, '$request->getPa;', 'add', 234, 34),
(17, '$request->getPa;', 'add', 234, 34),
(18, '$request->getPa;', 'add', 234, 34),
(19, '$request->getPa;', 'add', 234, 34),
(20, '$request->getPa;', 'add', 234, 34),
(21, '$request->getPa;', 'add', 234, 34),
(22, '$request->getPa;', 'add', 234, 34),
(23, '$request->getPa;', 'add', 234, 34),
(24, '$request->getPa;', 'add', 234, 34),
(25, '$request->getPa;', 'add', 234, 34);

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `id` int(12) NOT NULL,
  `f_name` varchar(20) NOT NULL,
  `l_name` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`id`, `f_name`, `l_name`, `email`, `password`) VALUES
(2, 'Dr.', 'Ahmed', 'e@e.com', '123'),
(3, 'ahmed', 'aa', 'e@e.com', '123'),
(4, 'ahmed', 'aa', 'e@e.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

CREATE TABLE `place` (
  `id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `weight` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `place`
--

INSERT INTO `place` (`id`, `name`, `weight`) VALUES
(12, 'bbb', 10),
(13, 'Place1', 10),
(14, 'Place2', 15),
(15, 'Place3', 11),
(16, 'Place4', 20),
(17, 'Place 5', 35),
(18, 'Place 5', 10);

-- --------------------------------------------------------

--
-- Table structure for table `place_neighbor`
--

CREATE TABLE `place_neighbor` (
  `placeID` int(10) NOT NULL,
  `placeNeighbor` int(10) NOT NULL,
  `distance` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `place_neighbor`
--

INSERT INTO `place_neighbor` (`placeID`, `placeNeighbor`, `distance`) VALUES
(13, 14, 100),
(13, 15, 150),
(13, 16, 433);

-- --------------------------------------------------------

--
-- Table structure for table `QRCode`
--

CREATE TABLE `QRCode` (
  `qr_id` int(10) NOT NULL,
  `place_id` int(10) NOT NULL,
  `randomKey` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `QRCode`
--

INSERT INTO `QRCode` (`qr_id`, `place_id`, `randomKey`) VALUES
(1, 13, 'bcf6461e13'),
(2, 17, 'f7ae684a5d'),
(3, 15, 'e6ec461d26'),
(4, 17, '128e3cb6a9');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(12) NOT NULL,
  `email` varchar(25) NOT NULL,
  `f_name` varchar(20) NOT NULL,
  `l_name` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `score` int(10) NOT NULL DEFAULT '0',
  `count` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `email`, `f_name`, `l_name`, `password`, `score`, `count`) VALUES
(1, 'e@e.com', 'Stu.', 'Ahmed', '123', 0, 0),
(2, 'e@e.com', 'ahmed', 'aa', '123', 0, 0),
(3, 'f', 'Ahmed', 'Ali', '123', 100, 0),
(4, 'f', 'Khalid', 'A', '123', 90, 0),
(5, 'f', 'Third', 'B', '123', 86, 0),
(6, 'f', 'Fourth', 'X', '123', 43, 0),
(7, 'f', 'Abdullah', 'Ahmed', '123', 22, 0),
(8, 'f', 'Mohammed', 'Ahmed', '123', 25, 0),
(10, 'f', 'Mohammed', 'Ahmed', '123', 105, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incentive`
--
ALTER TABLE `incentive`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `place_neighbor`
--
ALTER TABLE `place_neighbor`
  ADD PRIMARY KEY (`placeID`,`placeNeighbor`);

--
-- Indexes for table `QRCode`
--
ALTER TABLE `QRCode`
  ADD PRIMARY KEY (`qr_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incentive`
--
ALTER TABLE `incentive`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `QRCode`
--
ALTER TABLE `QRCode`
  MODIFY `qr_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
