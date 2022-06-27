-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2022 at 12:34 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `unit_table`
--

CREATE TABLE `unit_table` (
  `unit_id` int(11) UNSIGNED NOT NULL,
  `unit` varchar(50) NOT NULL,
  `main_id` int(11) UNSIGNED DEFAULT NULL,
  `category` tinyint(2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `unit_table`
--

INSERT INTO `unit_table` (`unit_id`, `unit`, `main_id`, `category`) VALUES
(1, 'Petro keliones', 5, 1),
(5, 'Don Kichotas', 11, 3),
(6, 'Omega', 9, 5),
(11, 'Matematika', 11, 4),
(12, 'Kelias namuo', NULL, 1),
(13, 'Anglu kalba', 5, 2),
(14, 'Istorija', NULL, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `unit_table`
--
ALTER TABLE `unit_table`
  ADD PRIMARY KEY (`unit_id`),
  ADD KEY `donations_ibfk_1` (`main_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `unit_table`
--
ALTER TABLE `unit_table`
  MODIFY `unit_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `unit_table`
--
ALTER TABLE `unit_table`
  ADD CONSTRAINT `unit_table_ibfk_1` FOREIGN KEY (`main_id`) REFERENCES `main_table` (`main_id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
