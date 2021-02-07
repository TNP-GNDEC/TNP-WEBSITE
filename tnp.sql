-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 22, 2021 at 02:23 PM
-- Server version: 8.0.23
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tnp`
--

-- --------------------------------------------------------

--
-- Table structure for table `connects`
--

CREATE TABLE `connects` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `connects`
--

INSERT INTO `connects` (`id`, `title`, `link`, `created_at`, `updated_at`) VALUES
(7, 'Connect with the TPO', '#', '2020-12-21 07:12:48', '2020-12-21 07:12:48');

-- --------------------------------------------------------

--
-- Table structure for table `diploma`
--

CREATE TABLE `diploma` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `urn` bigint UNSIGNED NOT NULL,
  `crn` bigint UNSIGNED NOT NULL,
  `institution_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year_of_passing` year DEFAULT NULL,
  `stream` bigint DEFAULT NULL,
  `obtained_marks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maximum_marks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `downloads`
--

CREATE TABLE `downloads` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `downloads`
--

INSERT INTO `downloads` (`id`, `title`, `link`, `created_at`, `updated_at`) VALUES
(1, 'Evaluation Performa', '#', '2020-12-21 01:34:20', '2020-12-21 01:34:20'),
(2, 'Department Faculty Coordinator', '#', '2020-12-21 01:34:42', '2020-12-21 01:34:42'),
(3, '6 Months Training Form', '#', '2020-12-21 01:35:12', '2020-12-21 01:35:12'),
(4, '6 Weeks Training Form', '#', '2020-12-21 01:35:28', '2020-12-21 01:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `explore`
--

CREATE TABLE `explore` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `explores`
--

CREATE TABLE `explores` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `explores`
--

INSERT INTO `explores` (`id`, `title`, `link`, `created_at`, `updated_at`) VALUES
(1, 'Words from TPO', '#', '2020-12-21 01:29:00', '2020-12-21 01:29:00'),
(2, 'Invitation', '#', '2020-12-21 01:30:36', '2020-12-21 01:30:36'),
(3, 'About Training and Placement Cell', '#', '2020-12-21 01:30:52', '2020-12-21 01:30:52'),
(4, 'Genconians', '#', '2020-12-21 01:31:14', '2020-12-21 01:31:14'),
(5, 'Final Year Members', '#', '2020-12-21 01:31:38', '2020-12-21 01:31:38'),
(6, 'Executive Members', '#', '2020-12-21 01:31:50', '2020-12-21 01:31:50'),
(7, 'Placement Records', '#', '2020-12-21 01:32:08', '2020-12-21 01:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `form_statuses`
--

CREATE TABLE `form_statuses` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `form_step` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `form_statuses`
--

INSERT INTO `form_statuses` (`id`, `user_id`, `form_step`, `created_at`, `updated_at`) VALUES
(8, 19, 1, '2021-01-22 03:14:31', '2021-01-22 03:14:31'),
(9, 20, 0, '2021-01-22 03:14:31', '2021-01-22 03:14:31'),
(10, 21, 0, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(11, 22, 0, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(12, 23, 0, '2021-01-22 03:14:33', '2021-01-22 03:14:33'),
(13, 24, 0, '2021-01-22 03:14:34', '2021-01-22 03:14:34'),
(14, 25, 0, '2021-01-22 03:14:34', '2021-01-22 03:14:34'),
(15, 26, 0, '2021-01-22 03:14:35', '2021-01-22 03:14:35'),
(16, 27, 0, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(17, 28, 0, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(18, 29, 0, '2021-01-22 03:14:37', '2021-01-22 03:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`id`, `title`, `link`, `created_at`, `updated_at`) VALUES
(1, 'GNDEC', '#', '2020-12-21 01:36:42', '2020-12-21 01:36:42'),
(2, 'Naurki.com', '#', '2020-12-21 01:36:54', '2020-12-21 01:36:54'),
(3, 'IndiaBIX', '#', '2020-12-21 01:37:11', '2020-12-21 01:37:11'),
(4, 'Indeed', '#', '2020-12-21 01:37:18', '2020-12-21 01:37:18'),
(5, 'Internshala', '#', '2020-12-21 01:37:30', '2020-12-21 01:37:30');

-- --------------------------------------------------------

--
-- Table structure for table `matriculation`
--

CREATE TABLE `matriculation` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `urn` bigint UNSIGNED NOT NULL,
  `crn` bigint UNSIGNED NOT NULL,
  `institution_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marks_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obtained_marks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maximum_marks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year_of_passing` year DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `board` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pincode` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `matriculation`
--

INSERT INTO `matriculation` (`id`, `user_id`, `urn`, `crn`, `institution_name`, `marks_type`, `obtained_marks`, `maximum_marks`, `file`, `year_of_passing`, `city`, `board`, `state`, `pincode`, `created_at`, `updated_at`) VALUES
(1, 19, 1805975, 1815375, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:31', '2021-01-22 03:14:31'),
(2, 20, 1805976, 1815376, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(3, 21, 1805977, 1815377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(4, 22, 1805978, 1815378, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:33', '2021-01-22 03:14:33'),
(5, 23, 1805979, 1815379, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:33', '2021-01-22 03:14:33'),
(6, 24, 1805980, 1815380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:34', '2021-01-22 03:14:34'),
(7, 25, 1805981, 1815381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:35', '2021-01-22 03:14:35'),
(8, 26, 1805982, 1815382, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:35', '2021-01-22 03:14:35'),
(9, 27, 1805983, 1815383, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(10, 28, 1805984, 1815384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(11, 29, 1805985, 1815385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:37', '2021-01-22 03:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2020_12_18_072656_create_posts_table', 1),
(4, '2020_12_19_072932_create_downloads_table', 1),
(5, '2020_12_19_073007_create_links_table', 1),
(6, '2020_12_19_081226_create_connects_table', 1),
(7, '2020_12_19_093210_create_explores_table', 1),
(8, '2020_12_29_172641_create_roles_table', 1),
(9, '2020_12_29_175117_create_users_table', 1),
(10, '2020_12_30_033827_create_form_statuses_table', 1),
(31, '2021_01_18_173325_create_step_three_table', 5),
(32, '2021_01_10_175629_create_step_two_table', 6),
(33, '2021_01_21_184753_create_twelfth_table', 7),
(34, '2021_01_21_192732_create_diploma_table', 8);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personalDetails`
--

CREATE TABLE `personaldetails` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `urn` bigint UNSIGNED NOT NULL,
  `crn` bigint UNSIGNED NOT NULL,
  `pincode` bigint DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weight` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `whatsapp` bigint DEFAULT NULL,
  `father_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `father_mobile` bigint DEFAULT NULL,
  `mother_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mother_mobile` bigint DEFAULT NULL,
  `stream` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blood_group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marital_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `training_sem` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shift` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `leet` tinyint(1) DEFAULT NULL,
  `farming_background` tinyint(1) DEFAULT NULL,
  `hostler` tinyint(1) DEFAULT NULL,
  `disability` tinyint(1) DEFAULT NULL,
  `aadhar` bigint DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personalDetails`
--

INSERT INTO `personaldetails` (`id`, `user_id`, `urn`, `crn`, `pincode`, `first_name`, `last_name`, `height`, `weight`, `gender`, `address`, `city`, `state`, `district`, `mobile`, `whatsapp`, `father_name`, `father_mobile`, `mother_name`, `mother_mobile`, `stream`, `blood_group`, `branch_type`, `category`, `marital_status`, `training_sem`, `shift`, `leet`, `farming_background`, `hostler`, `disability`, `aadhar`, `dob`, `created_at`, `updated_at`) VALUES
(1, 19, 1805975, 1815375, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:31', '2021-01-22 03:14:31'),
(2, 20, 1805976, 1815376, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:31', '2021-01-22 03:14:31'),
(3, 21, 1805977, 1815377, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(4, 22, 1805978, 1815378, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:33', '2021-01-22 03:14:33'),
(5, 23, 1805979, 1815379, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:33', '2021-01-22 03:14:33'),
(6, 24, 1805980, 1815380, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:34', '2021-01-22 03:14:34'),
(7, 25, 1805981, 1815381, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:35', '2021-01-22 03:14:35'),
(8, 26, 1805982, 1815382, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:35', '2021-01-22 03:14:35'),
(9, 27, 1805983, 1815383, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(10, 28, 1805984, 1815384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(11, 29, 1805985, 1815385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-22 03:14:37', '2021-01-22 03:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `type`, `description`, `created_at`, `updated_at`) VALUES
(1, 'post timymce', 'Selection', '<p>gyhjak<a href=\"http://localhost/phpmyadmin/sql.php?server=1&amp;db=tnp&amp;table=step_two&amp;pos=0\">http://localhost/phpmyadmin/sql.php?server=1&amp;db=tnp&amp;table=step_two&amp;pos=0</a></p>', '2021-01-19 06:54:34', '2021-01-19 06:54:34'),
(2, 'sudhj', 'Selection', '<p>hjnd<a href=\"https://drive.google.com/file/d/1FBxckAGAoNgNLSe6bM70a2iochDSooe3/view?usp=sharing\">https://drive.google.com/file/d/1FBxckAGAoNgNLSe6bM70a2iochDSooe3/view?usp=sharing</a></p>', '2021-01-19 06:59:28', '2021-01-19 06:59:28'),
(6, 'App developers for android and ios', 'Placement', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:07:36', '2020-12-18 04:08:55'),
(7, 'TechBar', 'Internship', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:09:39', '2020-12-18 04:09:39'),
(8, 'CHIKMIC - Placement drive', 'Placement', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:10:35', '2020-12-18 04:10:35'),
(9, 'Ralson Tyres Pro', 'Internship', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:11:23', '2020-12-18 04:11:23'),
(10, 'registrations for happy ltd', 'Placement', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:12:04', '2020-12-18 04:12:04'),
(11, 'Accenture drive - 2019/2020 batch', 'Training', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:13:11', '2020-12-18 04:13:11'),
(12, 'interviews for infosys', 'Announcement', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '2020-12-18 04:14:11', '2020-12-18 04:14:11');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `description`, `created_at`, `updated_at`) VALUES
(1, 'student', '2020-11-18 06:22:14', '2020-11-18 06:22:14'),
(2, 'coordinator', '2020-12-29 16:03:21', '2020-12-29 16:03:21');

-- --------------------------------------------------------

--
-- Table structure for table `twelfth`
--

CREATE TABLE `twelfth` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `urn` bigint UNSIGNED NOT NULL,
  `crn` bigint UNSIGNED NOT NULL,
  `institution_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jee_rank` bigint DEFAULT NULL,
  `obtained_marks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `board` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maximum_marks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year_of_passing` year DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email_verified_at`, `password`, `remember_token`, `email`, `uuid`, `role_id`, `created_at`, `updated_at`) VALUES
(19, '1805975', '2021-01-22 03:15:22', '$2y$10$aGUMxrIEoaR6UFp8s3CtqOfu0RRZValgC3USi0GAh5GC9eaGSdOw2', NULL, 'p.thapar99@gmail.com', '05771554-dd24-46b9-b7e0-4a4ff77780a9', 1, '2021-01-22 03:14:30', '2021-01-22 03:15:22'),
(20, '1805976', NULL, '$2y$10$hadJv5i6HW3UuVq5x9GZqOyNMQUGjK3nu7SfvLZZrH/Wn/pCsxT32', NULL, '', '40a82a74-c0ea-40fe-9434-efc778bd53c3', 1, '2021-01-22 03:14:31', '2021-01-22 03:14:31'),
(21, '1805977', NULL, '$2y$10$pkw3dFp46ybD9a1gVMwrju95eng5rD7pZ21LsV.Peh6tPjNIW7SAK', NULL, '', '144a9c9f-f401-428d-8cda-ee1c694a70dc', 1, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(22, '1805978', NULL, '$2y$10$EigTczt1BXqUuhQiDIZIduKPYf3t9FlxgIAZBb.PqMA/TeWUWcg3S', NULL, '', 'd220b512-8d98-4421-b3ef-6383eaa625c0', 1, '2021-01-22 03:14:32', '2021-01-22 03:14:32'),
(23, '1805979', NULL, '$2y$10$NjOauxq148WJeB0SgLInTuk.u26cQ9Q86bxdUpgWVFLHdihiBtTFi', NULL, '', '442994d4-c6d6-4709-bee8-24cd5d785ec0', 1, '2021-01-22 03:14:33', '2021-01-22 03:14:33'),
(24, '1805980', NULL, '$2y$10$jDji3chQSl40KhI3CEm4MuuwLdEbA8pkX9EkjFkzUR1jCMCGc0rcK', NULL, '', '85d5c544-bbad-4cef-9e33-f3d3b4fce2d3', 1, '2021-01-22 03:14:34', '2021-01-22 03:14:34'),
(25, '1805981', NULL, '$2y$10$G0sll6IqajgpsYy2rQ9nM.0hrbSgpLUOkdoAgAqMRL1mE3xIw06WG', NULL, '', 'e0aa53a0-b074-4c51-9c86-e6c2ddf52751', 1, '2021-01-22 03:14:34', '2021-01-22 03:14:34'),
(26, '1805982', NULL, '$2y$10$kq80v0e5J1w1uehwzWVvXe.Qwlq783Cl3wNNeFaT2Gn1q/PW15igS', NULL, '', 'e9ec6663-e938-4a17-a748-4bab64a47a19', 1, '2021-01-22 03:14:35', '2021-01-22 03:14:35'),
(27, '1805983', NULL, '$2y$10$vawJi62.Bh9I0OzFkCz5IugwcvnKe9Mk7/UvJa8yNXs6N/uBOLZ4S', NULL, '', 'f69d2868-1c2b-47f1-a519-b8200e53b7d8', 1, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(28, '1805984', NULL, '$2y$10$qexfzwGjJLXK/3P6pdEA/.XbXs4ufLO.uODYyGgeRHBaaBgYpIKFO', NULL, '', '2ac47559-28a6-4128-a8c3-e6cadfe891e4', 1, '2021-01-22 03:14:36', '2021-01-22 03:14:36'),
(29, '1805985', NULL, '$2y$10$g0rusB/GDHkXQ/jrvP9aluQl1my5AYvuSepO9pqJfizyYFxRhQPA.', NULL, '', '628f63ea-f1c4-4a74-b383-4036390e89db', 1, '2021-01-22 03:14:37', '2021-01-22 03:14:37'),
(30, 'admin', NULL, '$2y$10$qfw1eYfzq8ATkSswiX9XTepTvwY6cou8huCj4gNgNOe63/px2f97u', NULL, 'admin@g.com', 'de9c2873-7fd5-4039-b126-049463725405', 2, '2021-01-22 03:16:43', '2021-01-22 03:16:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `connects`
--
ALTER TABLE `connects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diploma`
--
ALTER TABLE `diploma`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `diploma_urn_unique` (`urn`),
  ADD KEY `diploma_user_id_foreign` (`user_id`);

--
-- Indexes for table `downloads`
--
ALTER TABLE `downloads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `explore`
--
ALTER TABLE `explore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `explores`
--
ALTER TABLE `explores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `form_statuses`
--
ALTER TABLE `form_statuses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `form_statuses_user_id_foreign` (`user_id`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matriculation`
--
ALTER TABLE `matriculation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `matriculation_urn_unique` (`urn`),
  ADD KEY `matriculation_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personalDetails`
--
ALTER TABLE `personalDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personaldetails_urn_unique` (`urn`),
  ADD KEY `personaldetails_user_id_foreign` (`user_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `twelfth`
--
ALTER TABLE `twelfth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `twelfth_urn_unique` (`urn`),
  ADD KEY `twelfth_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `connects`
--
ALTER TABLE `connects`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `diploma`
--
ALTER TABLE `diploma`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `downloads`
--
ALTER TABLE `downloads`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `explore`
--
ALTER TABLE `explore`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `explores`
--
ALTER TABLE `explores`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `form_statuses`
--
ALTER TABLE `form_statuses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `matriculation`
--
ALTER TABLE `matriculation`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `personalDetails`
--
ALTER TABLE `personalDetails`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `twelfth`
--
ALTER TABLE `twelfth`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `diploma`
--
ALTER TABLE `diploma`
  ADD CONSTRAINT `diploma_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `form_statuses`
--
ALTER TABLE `form_statuses`
  ADD CONSTRAINT `form_statuses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `matriculation`
--
ALTER TABLE `matriculation`
  ADD CONSTRAINT `matriculation_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `personalDetails`
--
ALTER TABLE `personalDetails`
  ADD CONSTRAINT `personaldetails_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `twelfth`
--
ALTER TABLE `twelfth`
  ADD CONSTRAINT `twelfth_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
