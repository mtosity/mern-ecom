-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 15, 2020 lúc 02:44 PM
-- Phiên bản máy phục vụ: 8.0.13-4
-- Phiên bản PHP: 7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `xvNz5C0Pts`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT 'a0514a78-fe87-4b44-8659-bc303495ec6f',
  `productID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT 'b90fbe6a-5455-4a3d-a518-90c6e0542ac3',
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `gender`, `createdAt`, `updatedAt`) VALUES
('16604f94-e9a6-4b66-ae5c-b6fb632d2b05', 'sweatshirts hoodies', 'male', '2020-03-28 08:36:54', '2020-03-28 08:36:54'),
('1e413bfe-1409-414d-89dc-cdad5449f8e7', 'outerwear', 'male', '2020-03-28 09:05:04', '2020-03-28 09:05:04'),
('371440cf-9f0c-4b2f-8c31-6d13f5372b23', 'shirts blouses', 'female', '2020-03-28 03:23:05', '2020-03-28 03:23:05'),
('5e9ce078-7ea1-463a-917f-88c52e87626a', 'pants', 'male', '2020-03-28 09:36:16', '2020-03-28 09:36:16'),
('a4e4adc1-0fea-4ef1-badf-366e2b087e48', 'dresses', 'female', '2020-03-27 14:01:09', '2020-03-27 14:01:09'),
('b6c9b479-9cc5-4920-932f-7d236c510e8e', 'activewear', 'male', '2020-03-28 08:55:18', '2020-03-28 08:55:18'),
('c0504a4a-def4-4e55-9def-3d244399ae8d', 'modern hanbok', 'female', '2020-03-28 04:02:15', '2020-03-28 04:02:15'),
('ce478d3a-4a37-45e7-85df-7d5f8528f382', 'sweaters', 'female', '2020-03-28 03:46:50', '2020-03-28 03:46:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT 'cb84295e-09c9-4630-8847-4b19f9f077ae',
  `productID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `productName` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `price` float UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `productID`, `userID`, `quantity`, `productName`, `color`, `size`, `status`, `price`, `createdAt`, `updatedAt`) VALUES
('026163fd-fa94-4a46-bcac-32e026ddcc9a', '7539dead-26a4-4c0f-b5c5-25ce518c7522', '36a2a5e1-923f-478f-9c50-84cbb18c7272', 1, 'Elite High Neck Cardigan 002 White', 'red', 'M', 'ordered', 269.99, '2020-04-12 03:46:16', '2020-04-12 03:46:16'),
('7a4bd77c-2919-4ce8-9e94-138c1dfab620', 'c759669a-3a35-450f-b153-e1470cf5e7ce', '', 2, 'Art Dress (2pcs)', 'black', 'L', 'ordered', 45.99, '2020-04-06 13:43:35', '2020-04-06 13:43:35'),
('862375f8-84d4-4267-bf3e-4295ba563c85', '0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'c56d9d0c-64f5-4a72-aa74-480bc1f6a05e', 1, 'Overfit Plaid Shirt Sweatshirt', 'blue', 'M', 'ordered', 49.99, '2020-04-06 13:50:01', '2020-04-06 13:50:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT 'c344735a-626e-4281-9b17-d68544268ef3',
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `originPrice` float UNSIGNED NOT NULL,
  `salePrice` float UNSIGNED NOT NULL,
  `categoryID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `gender` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `quantity`, `image`, `originPrice`, `salePrice`, `categoryID`, `gender`, `createdAt`, `updatedAt`) VALUES
('0c13a84e-13e5-459a-bed9-49ee443bf0c6', 'M Velvet Track Top Navy', 'Fabric/Material: Polyester 96%, Span 4%', 15, 'https://prod.kooding.com/productDetailImage/211570-2/39e5b577d733031ee4cd82b5a08f05ddc04f729a.jpg', 149.99, 142.99, 'b6c9b479-9cc5-4920-932f-7d236c510e8e', 'male', '2020-03-28 08:56:04', '2020-03-28 08:56:04'),
('0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'Martin Wool Maxi Coat', 'Fabric/Material: Polyester 70%, Wool 30%\n', 9, 'https://prod.kooding.com/productDetailImage/207592-2/421e44931c676cb4716f59a2ce4c47d62fd7242d.jpg', 228.99, 199.99, '1e413bfe-1409-414d-89dc-cdad5449f8e7', 'male', '2020-03-28 09:30:13', '2020-03-28 09:30:13'),
('0e02c6c6-b837-4feb-9fd7-e45a22c5dff4', 'Ten Ten Vest Hooded Cardigan', 'Fabric/Material.Wool 50%, Nylon 25%, Acrylic 15%, Polyester 10%', 11, 'https://prod.kooding.com/productDetailImage/177309-1/Korean-American-Online-Fashion-Shopping-Website-0000-52436.jpg', 36.99, 35.99, 'ce478d3a-4a37-45e7-85df-7d5f8528f382', 'female', '2020-03-28 04:00:13', '2020-03-28 04:00:13'),
('0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'Overfit Plaid Shirt Sweatshirt', 'Fabric/Material: Cotton 100%.Model typically wears size M\n\n', 11, 'https://prod.kooding.com/productDetailImage/210308-2/91e670b5f9754f9d5e7bd186516ced33edcf0652.jpg', 52.99, 49.99, '16604f94-e9a6-4b66-ae5c-b6fb632d2b05', 'male', '2020-03-28 08:39:10', '2020-03-28 08:39:10'),
('12449e8a-9213-4337-bca9-04e779cfaffd', 'Sense String Dress', 'Fabric/Material: Polyester 100%.Thickness: Thin.Feeling: Soft', 14, 'https://prod.kooding.com/productDetailImage/212503-2/651e1f4923c7303fc8e733a422489e344dac1044.jpg', 28.99, 25.99, 'a4e4adc1-0fea-4ef1-badf-366e2b087e48', 'female', '2020-03-27 14:18:39', '2020-03-27 14:18:39'),
('198c3c29-677d-42b3-a06f-84e737309aed', 'Minimal Overfit Single Coat', 'Fabric/Material: Polyester 80%, Wool 20%\n', 14, 'https://prod.kooding.com/productDetailImage/207600-2/cded23e8a55f449a6062191d7d805e164b0d791f.jpg', 153.99, 152.99, '1e413bfe-1409-414d-89dc-cdad5449f8e7', 'male', '2020-03-28 09:09:52', '2020-03-28 09:09:52'),
('2b6c7ed2-5378-4492-985a-7dd481d858c4', 'Day Slim Slacks', 'Fabric/Material: Cotton 50%, Polyester 50%', 5, 'https://prod.kooding.com/productDetailImage/150927-1/Korean-American-Online-Fashion-Shopping-Website-0000-28582.jpg', 37.99, 32.99, '5e9ce078-7ea1-463a-917f-88c52e87626a', 'male', '2020-03-28 09:38:25', '2020-03-28 09:38:25'),
('2ca14cf9-fa98-4c5a-b0db-b1c98850a4bc', 'Proper Half Banding Slacks', 'Fabric/Material: Polyester 63%, Rayon 33%, Span 4%.Model typically wears size M\n', 18, 'https://prod.kooding.com/productDetailImage/199510-1/Korean-American-Online-Fashion-Shopping-Website-0000-67792.jpg', 38.99, 35.99, '5e9ce078-7ea1-463a-917f-88c52e87626a', 'male', '2020-03-28 09:37:08', '2020-03-28 09:37:08'),
('2dcddf62-7148-41d0-b180-97248235235b', 'Motive Lace Blouse', 'Fabric/Material: Polyester 100%.Stretch: Low.Thickness: Thin.Transparency: High', 24, 'https://prod.kooding.com/productDetailImage/210817-2/ef6a17c4a8b6c8c6b49f8afcb4b87e546ce977c8.jpg', 33.99, 31.99, '371440cf-9f0c-4b2f-8c31-6d13f5372b23', 'female', '2020-03-28 03:37:24', '2020-03-28 03:37:24'),
('47db24c0-c50d-4115-81ac-14b1f87c8dee', 'M Velvet Track Top Wine', 'Fabric/Material: Polyester 96%, Span 4%', 13, 'https://prod.kooding.com/productDetailImage/211571-2/c17eaca816e0943966a081a9f461915a7d5d1579.jpg', 149.99, 144.99, 'b6c9b479-9cc5-4920-932f-7d236c510e8e', 'male', '2020-03-28 09:01:39', '2020-03-28 09:01:39'),
('48a17ab7-ab8b-40f2-91cd-376b3ef5118e', 'Colorful Turtleneck Dress', 'Fabric/Material: Polyester Blend.Stretch: Low.Thickness: Thick\n', 8, 'https://prod.kooding.com/productDetailImage/207834-2/58f7f8b06bf49b1d1cc4f5cf1c750a933ee71a50.jpg', 42.99, 39.99, 'ce478d3a-4a37-45e7-85df-7d5f8528f382', 'female', '2020-03-28 03:50:35', '2020-03-28 03:50:35'),
('55c80716-4d8c-4708-9f30-0755cd209966', 'Maria Blouse', 'Fabric/Material: Polyester 100%.Thickness: Thin.Transparency: Low\n', 10, 'https://prod.kooding.com/productDetailImage/210813-2/cd3766fa6bbbe7329f14a43d7cc43cc314e21dfa.jpg', 28.99, 26.99, '371440cf-9f0c-4b2f-8c31-6d13f5372b23', 'female', '2020-03-28 03:24:27', '2020-03-28 03:24:27'),
('57ffc785-4686-4beb-b822-dcd667c6c0ef', 'Rayon V Neck Knit Vest 001 Black', 'Fabric/Material: Rayon 50%, Polyester 25%, Nylon 25%', 10, 'https://prod.kooding.com/productDetailImage/212053-2/e6e032cb428a229e4eff5b47826cc1800a188612.jpg', 170.99, 167.99, 'b6c9b479-9cc5-4920-932f-7d236c510e8e', 'male', '2020-03-28 08:57:49', '2020-03-28 08:57:49'),
('5fca60ab-b7b2-4973-9a28-131894eb1156', 'Maxi Traditional Dress (Navy)', 'Fabric/Material: Cotton 100%.FIT: Regular\n\n', 11, 'https://prod.kooding.com/productDetailImage/207915-1/6dc1b5a271894269ce3f801e2968eec68fcca901.jpg', 228.99, 219.99, 'c0504a4a-def4-4e55-9def-3d244399ae8d', 'female', '2020-03-28 04:06:19', '2020-03-28 04:06:19'),
('62581f78-dfb0-4deb-a6d9-e0539e2d5be9', 'Glass Belt Dress', 'Fabric/Material: Polyester 95%, Span 5%.Stretch: Low.Thickness: Medium\n', 8, 'https://prod.kooding.com/productDetailImage/209942-2/95ec1aaeaca87d600d32a7d2572351311c883b49.jpg', 38.99, 34.99, 'a4e4adc1-0fea-4ef1-badf-366e2b087e48', 'female', '2020-03-27 14:22:50', '2020-03-27 14:22:50'),
('6a0ed388-ad6a-4ea1-abb9-d78087293b76', 'Drawing Patch Pullover Hoodie', 'Fabric/Material: Cotton 100%.Male Model / 6\'0\" (184cm) / Wearing size L', 10, 'https://prod.kooding.com/productDetailImage/178958-1/Korean-American-Online-Fashion-Shopping-Website-0000-54130.jpg', 114.99, 112.99, '16604f94-e9a6-4b66-ae5c-b6fb632d2b05', 'male', '2020-03-28 08:41:04', '2020-03-28 08:41:04'),
('747740f7-9166-445b-b507-3b7576f9220a', 'Madeleine Two Buttons Jacket', 'Fabric/Material: Polyester 72%, Rayon 26%, Span 2%.Thickness: Thick\n', 5, 'https://prod.kooding.com/productDetailImage/207544-2/9b0d9ef033198b60e77c5bf4f5cde9576e2e8451.jpg', 124.99, 120.99, '1e413bfe-1409-414d-89dc-cdad5449f8e7', 'male', '2020-03-28 09:21:52', '2020-03-28 09:21:52'),
('7539dead-26a4-4c0f-b5c5-25ce518c7522', 'Elite High Neck Cardigan 002 White', 'Fabric/Material: Acrylic 36%, Cotton 35%, Polyester 29%', 11, 'https://prod.kooding.com/productDetailImage/212063-2/64dfad831393247ef60155d6381e53bc71588e08.jpg', 271.99, 269.99, 'b6c9b479-9cc5-4920-932f-7d236c510e8e', 'male', '2020-03-28 08:59:46', '2020-03-28 08:59:46'),
('783f751c-9352-41ba-a685-9fae15dce24b', 'Fall Plaid Girl Set', 'Fabric/Material: Polyester 80%, Wool 20%.Thickness: Medium\n', 11, 'https://prod.kooding.com/productDetailImage/207778-2/4820e1fabedf6b10bb89664e491c069d30972b40.jpg', 31.99, 28.99, 'a4e4adc1-0fea-4ef1-badf-366e2b087e48', 'female', '2020-03-27 14:16:22', '2020-03-27 14:16:22'),
('7b799f5f-9a7b-4c93-b584-a0dbc3a46657', 'Washing Plan Cotton Long Shirt', 'Fabric/Material:Cotton 100%.Thickness: Medium.Transparency: Low\n', 20, 'https://prod.kooding.com/productDetailImage/210842-2/9c5de1ded8de601fba51fd187e4f3a7ac35e1de0.jpg', 33.99, 29.99, '371440cf-9f0c-4b2f-8c31-6d13f5372b23', 'female', '2020-03-28 03:30:20', '2020-03-28 03:30:20'),
('8fff1c75-4ce8-461d-bba6-c1ec6f2e09c4', 'Noa Plaid Slacks', 'Fabric/Material: Polyester 68%, Rayon 30%, Span 2%\n', 5, 'https://prod.kooding.com/productDetailImage/212177-2/9c5901bccfbca828e6456170e5e0d0e93a7633ba.jpg', 57.99, 52.99, '5e9ce078-7ea1-463a-917f-88c52e87626a', 'male', '2020-03-28 09:41:21', '2020-03-28 09:41:21'),
('90f7e110-755b-412d-967d-c4e7bf88c1f1', 'Neck Knit', 'Fabric/Material: Acrylic 100%. Stretch: Low.Thickness: Medium\n', 15, 'https://prod.kooding.com/productDetailImage/205345-2/c4f04cc2c95faf433920fbf7a6ca12cc9fa7873c.jpg', 18.99, 16.99, 'ce478d3a-4a37-45e7-85df-7d5f8528f382', 'female', '2020-03-28 03:56:47', '2020-03-28 03:56:47'),
('9c510d4e-bf40-4f32-91db-722ae05533b3', 'Daily Slack (Gray) ', 'Fabric/Material: Cotton 97%, Polyester 3%', 12, 'https://prod.kooding.com/productDetailImage/185493-1/Korean-American-Online-Fashion-Shopping-Website-0000-gray,-91.jpg', 24.99, 22.99, '5e9ce078-7ea1-463a-917f-88c52e87626a', 'male', '2020-03-28 09:40:01', '2020-03-28 09:40:01'),
('b6ec6442-9978-4c52-ac0a-677ad9092e4f', 'Heavy Cotton Raglan Hoodie', 'Fabric/Material: Cotton 100%.Model typically wears size M', 14, 'https://prod.kooding.com/productDetailImage/192595-1/Korean-American-Online-Fashion-Shopping-Website-0000-63263.jpg', 65.99, 62.99, '16604f94-e9a6-4b66-ae5c-b6fb632d2b05', 'male', '2020-03-28 08:43:09', '2020-03-28 08:43:09'),
('bc85fc94-88ed-490b-bcae-d5fc8aa852ab', 'Woman Korean Traditional Asymmetrical Coat', 'Fabric/Material: Wool, Tencel.Model is wearing M\n', 11, 'https://prod.kooding.com/productDetailImage/179018-1/Korean-American-Online-Fashion-Shopping-Website-0000-54190.jpg', 419.99, 399.99, 'c0504a4a-def4-4e55-9def-3d244399ae8d', 'female', '2020-03-28 04:08:41', '2020-03-28 04:08:41'),
('bdb98546-1465-4fd9-a9d5-b978394580c2', 'All Season Skirt', 'Fabric/Material: Polyester 100%.Feeling: Soft', 9, 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-0000-2957.jpg', 23.99, 21.99, 'c0504a4a-def4-4e55-9def-3d244399ae8d', 'female', '2020-03-28 04:03:22', '2020-03-28 04:03:22'),
('c759669a-3a35-450f-b153-e1470cf5e7ce', 'Art Dress (2pcs)', 'Fabric/Material: Polyester, Acrylic. Stretch: High.Thickness: Medium\n', 12, 'https://prod.kooding.com/productDetailImage/208282-2/b2772c3834838e89c8713860dd64b9b18a3a2c6f.jpg', 48.99, 45.99, 'a4e4adc1-0fea-4ef1-badf-366e2b087e48', 'female', '2020-03-27 14:20:55', '2020-03-27 14:20:55'),
('d580a15c-9000-4b5a-a608-12049d556401', 'Hanbok Jeogori', 'Fabric/Material: Cotton 70%, Rayon 30%', 13, 'https://prod.kooding.com/productDetailImage/187961-1/Korean-American-Online-Fashion-Shopping-Website-0000-60468.jpg', 64.99, 62.99, 'c0504a4a-def4-4e55-9def-3d244399ae8d', 'female', '2020-03-28 04:16:14', '2020-03-28 04:16:14'),
('e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'Mood Pocket Shirt', 'Fabric/Material: Cotton 100%.Thickness: Thin.Transparency: Low', 12, 'https://prod.kooding.com/productDetailImage/210818-2/54de8e3ecd84c5f3cfbcb48f54b7011625525f82.jpg', 33.99, 29.99, '371440cf-9f0c-4b2f-8c31-6d13f5372b23', 'female', '2020-03-28 03:33:03', '2020-03-28 03:33:03'),
('e43569e5-67aa-47bd-be17-ee4f5000bb2a', 'Unisex Chambros Stripe Napping Hoodie Sky Blue', 'Fabric/Material: TR Cotton Napping', 10, 'https://prod.kooding.com/productDetailImage/212348-2/20f92b1b9ce912cf73261f6877da6a454a71ec7e.jpg', 72, 69, '16604f94-e9a6-4b66-ae5c-b6fb632d2b05', 'male', '2020-03-28 08:45:29', '2020-03-28 08:45:29'),
('f17064d7-6ec4-4213-a16b-0610c7a27b72', 'Very Color Blazer', 'Fabric/Material: Polyester Blend\n', 11, 'https://prod.kooding.com/productDetailImage/207609-2/22a944a687a5aa875425ec14815fde5ec1de405d.jpg', 130.99, 124.99, '1e413bfe-1409-414d-89dc-cdad5449f8e7', 'male', '2020-03-28 09:12:27', '2020-03-28 09:12:27'),
('ff97f190-daee-4d63-b681-5048646471ea', 'Wave Cardigan Tee Shirt', 'Fabric/Material: Rayon 95%, Polyurethane 5%.Stretch: High.Thickness: Medium\n', 18, 'https://prod.kooding.com/productDetailImage/210161-2/362df423edd85eb995094070f0e0cb5e5ddbfdc7.jpg', 32.99, 29.99, 'ce478d3a-4a37-45e7-85df-7d5f8528f382', 'female', '2020-03-28 03:54:12', '2020-03-28 03:54:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `review`
--

CREATE TABLE `review` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '1fcac622-dcc0-4a33-b7ee-2ae000951ce9',
  `productID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cmt` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `stars` float UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subimg`
--

CREATE TABLE `subimg` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '83e89f4d-9438-43d6-9278-dca7ae6ea69e',
  `productID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `subimg`
--

INSERT INTO `subimg` (`id`, `productID`, `image`, `createdAt`, `updatedAt`) VALUES
('00436cbd-7c31-45c5-88d1-6b66f71cbb54', '57ffc785-4686-4beb-b822-dcd667c6c0ef', 'https://prod.kooding.com/productDetailImage/212053-2/e6e032cb428a229e4eff5b47826cc1800a188612.jpg', '2020-03-28 08:58:10', '2020-03-28 08:58:10'),
('02b6f9dc-d28e-4e76-bfb5-7ca2844463fa', '5fca60ab-b7b2-4973-9a28-131894eb1156', 'https://prod.kooding.com/productDetailImage/207915-1/be3c56a5e5fef560d6a8790e3c1eee71908b9506.jpg', '2020-03-28 04:06:54', '2020-03-28 04:06:54'),
('0373a7fc-5596-4375-805a-abd70aee9566', '2ca14cf9-fa98-4c5a-b0db-b1c98850a4bc', 'https://prod.kooding.com/productDetailImage/199510-1/Korean-American-Online-Fashion-Shopping-Website-00005-33304.jpg', '2020-03-28 09:37:37', '2020-03-28 09:37:37'),
('038a497b-63db-4ddf-8985-d8b2e7c2de75', '7b799f5f-9a7b-4c93-b584-a0dbc3a46657', 'https://prod.kooding.com/productDetailImage/210842-2/d3b8315226ae88e5475c69b932b645bab316ae87.jpg', '2020-03-28 03:31:12', '2020-03-28 03:31:12'),
('0511de36-0a68-443d-a8b2-0ad577d9eb24', '747740f7-9166-445b-b507-3b7576f9220a', 'https://prod.kooding.com/productDetailImage/207544-2/269e052fea809162b58572493f22cebdce9ec325.jpg', '2020-03-28 09:22:21', '2020-03-28 09:22:21'),
('063cd26d-4637-40df-a668-5a633408ac8a', 'e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'https://prod.kooding.com/productDetailImage/210818-2/95e3bc039c664a8ae657ae5fe03ce7c6aa44d135.jpg', '2020-03-28 03:33:26', '2020-03-28 03:33:26'),
('06def3b8-5364-44c6-ab3e-cb1592cb4320', 'c9672d46-76f2-4222-a39e-bf21ec682bab', 'https://prod.kooding.com/productDetailImage/209862-2/d22f79bba8806c8cadde65a4ab2c78ef801692ce.jpg', '2020-04-06 13:31:26', '2020-04-06 13:31:26'),
('07d5437d-c4d3-4765-bc35-4733f0fa6c7a', '2b6c7ed2-5378-4492-985a-7dd481d858c4', 'https://prod.kooding.com/productDetailImage/150927-1/Korean-American-Online-Fashion-Shopping-Website-0000-28582.jpg', '2020-03-28 09:38:47', '2020-03-28 09:38:47'),
('092abb54-1ff7-453c-85b4-e15c25e2749a', '5fca60ab-b7b2-4973-9a28-131894eb1156', 'https://prod.kooding.com/productDetailImage/207915-1/6dc1b5a271894269ce3f801e2968eec68fcca901.jpg', '2020-03-28 04:06:37', '2020-03-28 04:06:37'),
('0db9bc46-504c-412d-9e39-34a9c9da2f15', '9c510d4e-bf40-4f32-91db-722ae05533b3', 'https://prod.kooding.com/productDetailImage/185493-1/Korean-American-Online-Fashion-Shopping-Website-00005-28653.jpg', '2020-03-28 09:40:40', '2020-03-28 09:40:40'),
('0e5a857c-e4df-4b2e-bea9-e2ffac7ffd1b', '198c3c29-677d-42b3-a06f-84e737309aed', 'https://prod.kooding.com/productDetailImage/207600-2/cded23e8a55f449a6062191d7d805e164b0d791f.jpg', '2020-03-28 09:10:29', '2020-03-28 09:10:29'),
('1070bacf-8a6c-4aed-8fa5-6f8b3e1d7d0d', '783f751c-9352-41ba-a685-9fae15dce24b', 'https://prod.kooding.com/productDetailImage/207778-2/75deca5020279ec598574decad70d23a6305adc0.jpg', '2020-03-28 03:07:14', '2020-03-28 03:07:14'),
('115832d4-75ed-4c22-bcdb-294893fdeaa5', 'ff97f190-daee-4d63-b681-5048646471ea', 'https://prod.kooding.com/productDetailImage/210161-2/a881adf2f0bf2f9649b454b3cd15a2ac873c615d.jpg', '2020-03-28 03:54:51', '2020-03-28 03:54:51'),
('12baf18c-8c29-4566-99c8-4966d3ab8db6', '0e02c6c6-b837-4feb-9fd7-e45a22c5dff4', 'https://prod.kooding.com/productDetailImage/177309-1/Korean-American-Online-Fashion-Shopping-Website-0000-52436.jpg', '2020-03-28 04:00:32', '2020-03-28 04:00:32'),
('1366fbe9-f4ad-46ee-8f4c-085bdd434d24', '55c80716-4d8c-4708-9f30-0755cd209966', 'https://prod.kooding.com/productDetailImage/210813-2/0f70116e658f3c1412196f8c4b37c2ab89e8a33d.jpg', '2020-03-28 03:25:41', '2020-03-28 03:25:41'),
('1539a6ae-4dbe-4869-9b61-3569c2721109', 'bc85fc94-88ed-490b-bcae-d5fc8aa852ab', 'https://i.imgur.com/4mnbJgQ.jpg', '2020-03-28 04:13:29', '2020-03-28 04:13:29'),
('198706df-e922-460f-a53b-d025a2574b97', 'c759669a-3a35-450f-b153-e1470cf5e7ce', 'https://prod.kooding.com/productDetailImage/208282-2/1995b53e570a45ff17744cb7fb1638ab93e7b13a.jpg', '2020-03-28 03:08:57', '2020-03-28 03:08:57'),
('1aac34a1-4123-41ae-8c1f-5da50b32c7b7', 'bdb98546-1465-4fd9-a9d5-b978394580c2', 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-00008-2498.jpg', '2020-03-28 04:04:18', '2020-03-28 04:04:18'),
('1b21ea3f-50fc-471b-87e0-8e21ecede2ce', '783f751c-9352-41ba-a685-9fae15dce24b', 'https://prod.kooding.com/productDetailImage/207778-2/4820e1fabedf6b10bb89664e491c069d30972b40.jpg', '2020-03-28 03:06:39', '2020-03-28 03:06:39'),
('1b4222ff-ad70-4f82-bd3e-955a4b64d69c', '0e02c6c6-b837-4feb-9fd7-e45a22c5dff4', 'https://prod.kooding.com/productDetailImage/177309-1/Korean-American-Online-Fashion-Shopping-Website-00008-21938.jpg', '2020-03-28 04:00:42', '2020-03-28 04:00:42'),
('1be0e168-4f32-4c49-99bf-655c59de9e75', '8fff1c75-4ce8-461d-bba6-c1ec6f2e09c4', 'https://prod.kooding.com/productDetailImage/212177-2/fbc552124fbc35929d9e4d256d0cba9dd6685c4e.jpg', '2020-03-28 09:41:51', '2020-03-28 09:41:51'),
('1d9a8fbb-80f5-465b-b124-dd0272beddde', 'c759669a-3a35-450f-b153-e1470cf5e7ce', 'https://prod.kooding.com/productDetailImage/208282-2/c0af0c92675d079657f57daae88956114e545518.jpg', '2020-03-28 03:09:06', '2020-03-28 03:09:06'),
('1e19ff4c-d1f0-4401-8fe8-a4adf4dcd78a', '0c13a84e-13e5-459a-bed9-49ee443bf0c6', 'https://prod.kooding.com/productDetailImage/211570-2/851e7397f38aee2ee08056bab5dc4521f9bad887.jpg', '2020-03-28 08:56:34', '2020-03-28 08:56:34'),
('1f555094-0683-4f72-8cfb-9f7cb856e509', '55c80716-4d8c-4708-9f30-0755cd209966', 'https://prod.kooding.com/productDetailImage/210813-2/fb1fe91ba287d04bd06a17fbc76a71f63ca7bfe6.jpg', '2020-03-28 03:25:31', '2020-03-28 03:25:31'),
('1f8726a3-34b8-4c75-8385-99f6b2c6581d', 'ff97f190-daee-4d63-b681-5048646471ea', 'https://prod.kooding.com/productDetailImage/210161-2/362df423edd85eb995094070f0e0cb5e5ddbfdc7.jpg', '2020-03-28 03:54:26', '2020-03-28 03:54:26'),
('21f09b6d-4bae-4794-9e36-981fef7fc3cf', '8fff1c75-4ce8-461d-bba6-c1ec6f2e09c4', 'https://prod.kooding.com/productDetailImage/212177-2/9c5901bccfbca828e6456170e5e0d0e93a7633ba.jpg', '2020-03-28 09:41:40', '2020-03-28 09:41:40'),
('2241cbb4-c803-446d-bb6c-6e4536b45900', '12449e8a-9213-4337-bca9-04e779cfaffd', 'https://prod.kooding.com/productDetailImage/212503-2/3cc568ff0c1948d1846d4d3bb03584c4e666ec60.jpg', '2020-03-27 14:44:30', '2020-03-27 14:44:30'),
('23595b63-0caa-42cf-b6f9-49687a31cf96', 'bdb98546-1465-4fd9-a9d5-b978394580c2', 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-00012-2580.jpg', '2020-03-28 04:04:29', '2020-03-28 04:04:29'),
('248b6364-bb69-450b-bc2e-462d9c850ce0', '6a0ed388-ad6a-4ea1-abb9-d78087293b76', 'https://prod.kooding.com/productDetailImage/178958-1/Korean-American-Online-Fashion-Shopping-Website-00003%20(2)-2885.jpg', '2020-03-28 08:41:46', '2020-03-28 08:41:46'),
('29c92b0d-3790-45b2-9019-76fd2f79bce8', 'b6ec6442-9978-4c52-ac0a-677ad9092e4f', 'https://prod.kooding.com/productDetailImage/192595-1/Korean-American-Online-Fashion-Shopping-Website-00004-30969.jpg', '2020-03-28 08:43:43', '2020-03-28 08:43:43'),
('2c4e3274-84e8-4aa4-ac15-57293b5e4805', '0c13a84e-13e5-459a-bed9-49ee443bf0c6', 'https://prod.kooding.com/productDetailImage/211570-2/39e5b577d733031ee4cd82b5a08f05ddc04f729a.jpg', '2020-03-28 08:56:27', '2020-03-28 08:56:27'),
('3068620b-f4a9-4c2a-bfe7-0700ae2bc4fd', '198c3c29-677d-42b3-a06f-84e737309aed', 'https://prod.kooding.com/productDetailImage/207600-2/0b1b04f8a015bdc423f18ef7189939f90b6e2802.jpg', '2020-03-28 09:10:55', '2020-03-28 09:10:55'),
('30a838e3-900e-49a5-a89a-669bfb752389', '7539dead-26a4-4c0f-b5c5-25ce518c7522', 'https://prod.kooding.com/productDetailImage/212063-2/df005662cbc6d70f3395ba2fac8e55b26cb5ecfe.jpg', '2020-03-28 09:00:09', '2020-03-28 09:00:09'),
('32da1adb-8bcc-49b1-b7e4-ec742065247b', 'bdb98546-1465-4fd9-a9d5-b978394580c2', 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-0000-2957.jpg', '2020-03-28 04:04:09', '2020-03-28 04:04:09'),
('32ffa324-ceba-469f-87cc-58cde8af6418', '747740f7-9166-445b-b507-3b7576f9220a', 'https://prod.kooding.com/productDetailImage/207544-2/5c9c0edc64409a2f34eea042ba2060ccbf26b52b.jpg', '2020-03-28 09:22:26', '2020-03-28 09:22:26'),
('34abf4ba-c1ff-4d0f-82a2-c95f77e5ec98', '0c13a84e-13e5-459a-bed9-49ee443bf0c6', 'https://prod.kooding.com/productDetailImage/211570-2/4ee77a76de6fbadcc7ef81e705f193fedf7255cd.jpg', '2020-03-28 08:56:40', '2020-03-28 08:56:40'),
('3571da2c-7313-44a2-be0c-886a98cfe318', 'b6ec6442-9978-4c52-ac0a-677ad9092e4f', 'https://prod.kooding.com/productDetailImage/192595-1/Korean-American-Online-Fashion-Shopping-Website-0000-63263.jpg', '2020-03-28 08:43:36', '2020-03-28 08:43:36'),
('39f65e8e-0029-4273-add5-c0a55df72294', '6a0ed388-ad6a-4ea1-abb9-d78087293b76', 'https://prod.kooding.com/productDetailImage/178958-1/Korean-American-Online-Fashion-Shopping-Website-00003%20(1)-2779.jpg', '2020-03-28 08:41:41', '2020-03-28 08:41:41'),
('3b05f4b6-f2a9-4c58-aa71-16b5f79c4549', '0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'https://prod.kooding.com/productDetailImage/207592-2/f1728445b4ffb5558458f15e07e956fb4dd61b6f.jpg', '2020-03-28 09:31:00', '2020-03-28 09:31:00'),
('3ca4c6fe-9ffa-4c85-9acf-63b24fc290f2', '0e02c6c6-b837-4feb-9fd7-e45a22c5dff4', 'https://prod.kooding.com/productDetailImage/177309-1/Korean-American-Online-Fashion-Shopping-Website-00016-charcoal,-51.jpg', '2020-03-28 04:01:05', '2020-03-28 04:01:05'),
('3d1bb8bd-e174-4b87-ac02-8cada769ad00', '2b6c7ed2-5378-4492-985a-7dd481d858c4', 'https://prod.kooding.com/productDetailImage/150927-1/Korean-American-Online-Fashion-Shopping-Website-00002-6377.jpg', '2020-03-28 09:39:03', '2020-03-28 09:39:03'),
('3f223142-f7ca-4b62-b045-e4603b79336b', '90f7e110-755b-412d-967d-c4e7bf88c1f1', 'https://prod.kooding.com/productDetailImage/205345-2/bc939e37a5588785b70906594e539bf702bf40c6.jpg', '2020-03-28 03:57:27', '2020-03-28 03:57:27'),
('417d25f6-2db9-4efd-987e-797d701327ae', 'd580a15c-9000-4b5a-a608-12049d556401', 'https://prod.kooding.com/productDetailImage/187961-1/Korean-American-Online-Fashion-Shopping-Website-00015-19034.jpg', '2020-03-28 04:16:48', '2020-03-28 04:16:48'),
('42816c7c-936e-413e-a51d-2cf1349b77e2', '2b6c7ed2-5378-4492-985a-7dd481d858c4', 'https://prod.kooding.com/productDetailImage/150927-1/Korean-American-Online-Fashion-Shopping-Website-00001%20(1)-754.jpg', '2020-03-28 09:38:52', '2020-03-28 09:38:52'),
('4313be7b-6ab2-422b-8349-e373d97fc5bf', '7b799f5f-9a7b-4c93-b584-a0dbc3a46657', 'https://prod.kooding.com/productDetailImage/210842-2/38f8c500f887555396debb9cbbfa6ba95ac8b571.jpg', '2020-03-28 03:30:58', '2020-03-28 03:30:58'),
('45f5074a-b4b7-44b1-bb58-c5089842f543', 'f17064d7-6ec4-4213-a16b-0610c7a27b72', 'https://prod.kooding.com/productDetailImage/207609-2/73e45f077880d51f4e6453a995eea7c98b204c5a.jpg', '2020-03-28 09:12:57', '2020-03-28 09:12:57'),
('4a97daa6-03da-4e76-8eed-95c81ce557b7', '9c510d4e-bf40-4f32-91db-722ae05533b3', 'https://prod.kooding.com/productDetailImage/185493-1/Korean-American-Online-Fashion-Shopping-Website-0000-gray,-91.jpg', '2020-03-28 09:40:20', '2020-03-28 09:40:20'),
('4ea3dedc-472a-4e42-9f5f-bf7cc0b4cf1a', 'f17064d7-6ec4-4213-a16b-0610c7a27b72', 'https://prod.kooding.com/productDetailImage/207609-2/a131334ab3db7cb34f0ca5bcdaac782b8bfee3cb.jpg', '2020-03-28 09:12:52', '2020-03-28 09:12:52'),
('4faaa786-b546-49ed-8210-189fab82157b', 'bdb98546-1465-4fd9-a9d5-b978394580c2', 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-00022-1872.jpg', '2020-03-28 04:04:49', '2020-03-28 04:04:49'),
('529973a9-a6bd-4029-98f0-71feb5210d63', 'f17064d7-6ec4-4213-a16b-0610c7a27b72', 'https://prod.kooding.com/productDetailImage/207609-2/0345f113d851bf4320141389cd3c4f2f39905675.jpg', '2020-03-28 09:13:02', '2020-03-28 09:13:02'),
('5386751e-b099-43b3-b65d-9ac649c21841', '198c3c29-677d-42b3-a06f-84e737309aed', 'https://prod.kooding.com/productDetailImage/207600-2/12f3653bdefdc0fa4473a2854de5f99da9c5c610.jpg', '2020-03-28 09:10:45', '2020-03-28 09:10:45'),
('540fd017-5610-4376-94fd-84c637a76f9c', '48a17ab7-ab8b-40f2-91cd-376b3ef5118e', 'https://prod.kooding.com/productDetailImage/207834-2/0087e90b68b205296bf0445fe0bec14930dda689.jpg', '2020-03-28 03:51:55', '2020-03-28 03:51:55'),
('549f2880-c77f-4ec6-91fe-d0b131d9092d', 'c9672d46-76f2-4222-a39e-bf21ec682bab', 'https://prod.kooding.com/productDetailImage/209862-2/e2958f919895766cf8e3302d104f54ad70fb90c5.jpg', '2020-04-06 13:31:36', '2020-04-06 13:31:36'),
('56da89f1-ad55-4c45-9600-43c6c0d45f64', '2ca14cf9-fa98-4c5a-b0db-b1c98850a4bc', 'https://prod.kooding.com/productDetailImage/199510-1/Korean-American-Online-Fashion-Shopping-Website-0000-67792.jpg', '2020-03-28 09:37:25', '2020-03-28 09:37:25'),
('5903697d-fa4f-4866-80cf-1418920ae31b', 'd580a15c-9000-4b5a-a608-12049d556401', 'https://prod.kooding.com/productDetailImage/187961-1/Korean-American-Online-Fashion-Shopping-Website-00014-19535.jpg', '2020-03-28 04:16:54', '2020-03-28 04:16:54'),
('591785ae-149b-408a-a13e-1a7f5a4382a4', '62581f78-dfb0-4deb-a6d9-e0539e2d5be9', 'https://prod.kooding.com/productDetailImage/209942-2/95ec1aaeaca87d600d32a7d2572351311c883b49.jpg', '2020-03-28 02:58:03', '2020-03-28 02:58:03'),
('5ba8f6f2-6cfd-46ce-9feb-45a62ec33ea4', '90f7e110-755b-412d-967d-c4e7bf88c1f1', 'https://prod.kooding.com/productDetailImage/205345-2/4b66a69e1bafce4741e09e53e70ee264b7d38bc3.jpg', '2020-03-28 03:57:33', '2020-03-28 03:57:33'),
('5c295c70-64b4-4664-8c3b-fe32cb6dcf14', 'e43569e5-67aa-47bd-be17-ee4f5000bb2a', 'https://prod.kooding.com/productDetailImage/212348-2/e4af609d4b0586a39a5c1dac2605f78d242b362c.jpg', '2020-03-28 08:45:54', '2020-03-28 08:45:54'),
('5c472cb4-8cae-420f-9c74-551675684049', '0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'https://prod.kooding.com/productDetailImage/210308-2/90dd920010eabf5734ef9eb0b0986c63208e35fb.jpg', '2020-03-28 08:39:51', '2020-03-28 08:39:51'),
('5fe29a53-cdf5-4414-88c3-8d88df9b8321', '2dcddf62-7148-41d0-b180-97248235235b', 'https://prod.kooding.com/productDetailImage/210817-2/9a40ac533a93d63c3562db006d7c0cc454913623.jpg', '2020-03-28 03:37:51', '2020-03-28 03:37:51'),
('63404959-5180-48c3-afb4-03ed9d5bbd6d', '48a17ab7-ab8b-40f2-91cd-376b3ef5118e', 'https://prod.kooding.com/productDetailImage/207834-2/712d0395f5bea773c052b8002f1c743a2db87aa8.jpg', '2020-03-28 03:52:02', '2020-03-28 03:52:02'),
('6482c7f4-5f20-4d19-8d9f-b636364958aa', '47db24c0-c50d-4115-81ac-14b1f87c8dee', 'https://prod.kooding.com/productDetailImage/211571-2/d18d2c90090aa166602b88bf4b8ec5da3a76c479.jpg', '2020-03-28 09:02:38', '2020-03-28 09:02:38'),
('666e2a0c-ac72-456e-a676-e2d2ba7b14f8', '783f751c-9352-41ba-a685-9fae15dce24b', 'https://prod.kooding.com/productDetailImage/207778-2/010bc4c3ffc678b33b2d5b16507c519928c04553.jpg', '2020-03-28 03:07:04', '2020-03-28 03:07:04'),
('667843a7-0b69-41a8-ab6d-bd3e352f1835', '8fff1c75-4ce8-461d-bba6-c1ec6f2e09c4', 'https://prod.kooding.com/productDetailImage/212177-2/e032cc82f792b599ff333b6e810fa64c4a4069d2.jpg', '2020-03-28 09:41:46', '2020-03-28 09:41:46'),
('6d8260e5-30ec-415c-9d67-024f3f48790d', 'bc85fc94-88ed-490b-bcae-d5fc8aa852ab', 'https://i.imgur.com/ChuPHPg.jpg', '2020-03-28 04:14:34', '2020-03-28 04:14:34'),
('6f57f68e-ce25-47cc-a9cc-fe2d9fbc2a2e', '7539dead-26a4-4c0f-b5c5-25ce518c7522', 'https://prod.kooding.com/productDetailImage/212063-2/64dfad831393247ef60155d6381e53bc71588e08.jpg', '2020-03-28 09:00:04', '2020-03-28 09:00:04'),
('70b35b05-7fcc-43ff-83bb-f948c296c230', '62581f78-dfb0-4deb-a6d9-e0539e2d5be9', 'https://prod.kooding.com/productDetailImage/209942-2/fb5f918808e68c1427104f21ee0eeca6a2927ca4.jpg', '2020-03-28 03:03:54', '2020-03-28 03:03:54'),
('72a0088c-24fe-47ce-a42a-f11e892a5f2c', '2ca14cf9-fa98-4c5a-b0db-b1c98850a4bc', 'https://prod.kooding.com/productDetailImage/199510-1/Korean-American-Online-Fashion-Shopping-Website-00007-29244.jpg', '2020-03-28 09:37:43', '2020-03-28 09:37:43'),
('730d7930-d3d4-4f80-a91b-f45f98f4684e', '5fca60ab-b7b2-4973-9a28-131894eb1156', 'https://prod.kooding.com/productDetailImage/207915-1/8bf2e5b02a9bd3f9fcac682c2f7f9819912c0a1e.jpg', '2020-03-28 04:07:16', '2020-03-28 04:07:16'),
('736de62d-af8d-4337-8349-aafb55d0a80e', 'e43569e5-67aa-47bd-be17-ee4f5000bb2a', 'https://prod.kooding.com/productDetailImage/212348-2/b0ea4ab1b4eb1aae051f59f332199d67e3495baf.jpg', '2020-03-28 08:46:10', '2020-03-28 08:46:10'),
('75cc1047-9d45-4a33-8f37-ca9e0edf3b3a', '0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'https://prod.kooding.com/productDetailImage/207592-2/37b52cd20248d299621e0315d0bd7c4fda5407b7.jpg', '2020-03-28 09:30:54', '2020-03-28 09:30:54'),
('76683d50-2331-4de1-8b7e-23d6f40d779e', '0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'https://prod.kooding.com/productDetailImage/207592-2/691448abb988c4786154e978e942a384b54586ad.jpg', '2020-03-28 09:30:41', '2020-03-28 09:30:41'),
('7955bf5e-4b4c-4bea-98f5-42dcb7134f06', '48a17ab7-ab8b-40f2-91cd-376b3ef5118e', 'https://prod.kooding.com/productDetailImage/207834-2/25f72bd17e130dd023a743402fe1955f6065b42c.jpg', '2020-03-28 03:52:16', '2020-03-28 03:52:16'),
('79699caa-0d3c-49f8-9ccb-b0c6c9d76f93', '783f751c-9352-41ba-a685-9fae15dce24b', 'https://prod.kooding.com/productDetailImage/207778-2/71eb166927693eb51c5e720b7cd4ea77287fbd98.jpg', '2020-03-28 03:06:45', '2020-03-28 03:06:45'),
('7afbb3a5-5413-4ac2-bbea-32d093fd1194', 'c759669a-3a35-450f-b153-e1470cf5e7ce', 'https://prod.kooding.com/productDetailImage/208282-2/b2772c3834838e89c8713860dd64b9b18a3a2c6f.jpg', '2020-03-28 03:08:39', '2020-03-28 03:08:39'),
('7c96dc68-9fa4-48c2-ab59-e2e42c69bbbf', '198c3c29-677d-42b3-a06f-84e737309aed', 'https://prod.kooding.com/productDetailImage/207600-2/f39cf474a5a14fbc7c62ddd28d6c4b212fa75c4e.jpg', '2020-03-28 09:10:39', '2020-03-28 09:10:39'),
('7d449d60-5bcf-47db-b552-70e6d1586287', '2ca14cf9-fa98-4c5a-b0db-b1c98850a4bc', 'https://prod.kooding.com/productDetailImage/199510-1/Korean-American-Online-Fashion-Shopping-Website-00004-33548.jpg', '2020-03-28 09:37:31', '2020-03-28 09:37:31'),
('7f3d7651-499a-4a6e-a7a7-a066bc7f4571', '0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'https://prod.kooding.com/productDetailImage/207592-2/5a9897b8bc5c7fbeb4a7d726a45ccc0900f558f5.jpg', '2020-03-28 09:31:09', '2020-03-28 09:31:09'),
('848d2006-39af-46da-92f5-dc473a836642', '2dcddf62-7148-41d0-b180-97248235235b', 'https://prod.kooding.com/productDetailImage/210817-2/cbeab7f204ef73dea2167c1806327809bb99fe9f.jpg', '2020-03-28 03:38:02', '2020-03-28 03:38:02'),
('85f0f04d-9285-40ca-a14d-8c60491c3a76', '2dcddf62-7148-41d0-b180-97248235235b', 'https://prod.kooding.com/productDetailImage/210817-2/d7336f005cf5550ebfb2986d6eb15b3bff32f660.jpg', '2020-03-28 03:37:44', '2020-03-28 03:37:44'),
('86fcee73-c39c-4ef2-86db-82d858b7f5df', 'b6ec6442-9978-4c52-ac0a-677ad9092e4f', 'https://prod.kooding.com/productDetailImage/192595-1/Korean-American-Online-Fashion-Shopping-Website-00038-1865.jpg', '2020-03-28 08:43:54', '2020-03-28 08:43:54'),
('87bf3ee0-bc19-4ea4-81d7-218c59836053', '2b6c7ed2-5378-4492-985a-7dd481d858c4', 'https://prod.kooding.com/productDetailImage/150927-1/Korean-American-Online-Fashion-Shopping-Website-00001%20(2)-1041.jpg', '2020-03-28 09:38:58', '2020-03-28 09:38:58'),
('8b760bf1-e468-4a44-b2b2-1f330ba99ff8', '747740f7-9166-445b-b507-3b7576f9220a', 'https://prod.kooding.com/productDetailImage/207544-2/9b0d9ef033198b60e77c5bf4f5cde9576e2e8451.jpg', '2020-03-28 09:22:09', '2020-03-28 09:22:09'),
('8b915043-c513-4037-a676-d53ceb40c96b', 'c759669a-3a35-450f-b153-e1470cf5e7ce', 'https://prod.kooding.com/productDetailImage/208282-2/f775c62cf198b778dad1eb6593ac499b0de1343b.jpg', '2020-03-28 03:08:52', '2020-03-28 03:08:52'),
('8e898d88-ba5e-4135-a7aa-6dc41206e5d4', '7b799f5f-9a7b-4c93-b584-a0dbc3a46657', 'https://prod.kooding.com/productDetailImage/210842-2/9c5de1ded8de601fba51fd187e4f3a7ac35e1de0.jpg', '2020-03-28 03:30:37', '2020-03-28 03:30:37'),
('95a5dcf5-18d2-46c1-81de-dfe4f6364ade', 'd580a15c-9000-4b5a-a608-12049d556401', 'https://prod.kooding.com/productDetailImage/187961-1/Korean-American-Online-Fashion-Shopping-Website-00004-29497.jpg', '2020-03-28 04:16:40', '2020-03-28 04:16:40'),
('95d1327b-b89f-40b3-b6e6-3e27dfec778b', '57ffc785-4686-4beb-b822-dcd667c6c0ef', 'https://prod.kooding.com/productDetailImage/212053-2/6916a9ccb2c70229831611495a5f9191bedd2bfa.jpg', '2020-03-28 08:58:21', '2020-03-28 08:58:21'),
('96db0146-fbba-43b2-b283-145f905dc9e8', '12449e8a-9213-4337-bca9-04e779cfaffd', 'https://prod.kooding.com/productDetailImage/212503-2/4e3a15596d109d2b9b0ef91304dedcd52fdb746e.jpg', '2020-03-27 14:44:43', '2020-03-27 14:44:43'),
('9a645ab5-2230-45d6-a24e-ad56ace5f153', '0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'https://prod.kooding.com/productDetailImage/210308-2/a240551bbc37d61d6f3c934cbe972e10706b8d8a.jpg', '2020-03-28 08:39:46', '2020-03-28 08:39:46'),
('9af46218-011b-4e24-acab-ea46b9bfd636', 'ff97f190-daee-4d63-b681-5048646471ea', 'https://prod.kooding.com/productDetailImage/210161-2/12cec950669893b0c66e8e7570daf17e66af27fe.jpg', '2020-03-28 03:55:02', '2020-03-28 03:55:02'),
('9c12490d-870e-4ddf-bba0-fff52c448138', '47db24c0-c50d-4115-81ac-14b1f87c8dee', 'https://prod.kooding.com/productDetailImage/211571-2/6fb509b2ec336c325ea7c377c99cda0f4c6bb4de.jpg', '2020-03-28 09:02:19', '2020-03-28 09:02:19'),
('a20e4576-87a4-4f28-8727-2ed28738419c', '9c510d4e-bf40-4f32-91db-722ae05533b3', 'https://prod.kooding.com/productDetailImage/185493-1/Korean-American-Online-Fashion-Shopping-Website-00009-23924.jpg', '2020-03-28 09:40:28', '2020-03-28 09:40:28'),
('a309b687-f7c7-4fdd-a880-b97d7da2ef71', 'bc85fc94-88ed-490b-bcae-d5fc8aa852ab', 'https://prod.kooding.com/productDetailImage/179018-1/Korean-American-Online-Fashion-Shopping-Website-0000-54190.jpg', '2020-03-28 04:09:01', '2020-03-28 04:09:01'),
('a603243d-3004-485c-9176-a58c3c4012f0', '747740f7-9166-445b-b507-3b7576f9220a', 'https://prod.kooding.com/productDetailImage/207544-2/acbc35fde535a951681c215db68c9d3537a74634.jpg', '2020-03-28 09:22:37', '2020-03-28 09:22:37'),
('a7a8946f-bc80-4541-aab6-6fc8ef3c5380', 'f17064d7-6ec4-4213-a16b-0610c7a27b72', 'https://prod.kooding.com/productDetailImage/207609-2/22a944a687a5aa875425ec14815fde5ec1de405d.jpg', '2020-03-28 09:12:44', '2020-03-28 09:12:44'),
('a8901852-99ae-4349-8e73-3c09ae2d23e8', '57ffc785-4686-4beb-b822-dcd667c6c0ef', 'https://prod.kooding.com/productDetailImage/212053-2/679df909d7278d6d20abf71995b1124ec5f5eb1f.jpg', '2020-03-28 08:58:16', '2020-03-28 08:58:16'),
('a96d1b4a-6eff-462b-9a4d-dc20515b95e5', '12449e8a-9213-4337-bca9-04e779cfaffd', 'https://prod.kooding.com/productDetailImage/212503-2/ef18068827c04afa9f604d7e1ae09335eb1fd433.jpg', '2020-03-27 14:45:01', '2020-03-27 14:45:01'),
('ab04432e-e9a7-4edc-8b36-a879f96d1844', 'd580a15c-9000-4b5a-a608-12049d556401', 'https://prod.kooding.com/productDetailImage/187961-1/Korean-American-Online-Fashion-Shopping-Website-0000511%20(1)-gray,.jpg', '2020-03-28 04:17:36', '2020-03-28 04:17:36'),
('ac39a36d-db7e-4d3e-a58a-19d43ab179db', '0c13a84e-13e5-459a-bed9-49ee443bf0c6', 'https://prod.kooding.com/productDetailImage/211570-2/48a099086c5908b2f8b14b6fb0c8b5194703719d.jpg', '2020-03-28 08:56:55', '2020-03-28 08:56:55'),
('ac806d36-eaf4-4b9a-b069-9c29014385fc', '2b6c7ed2-5378-4492-985a-7dd481d858c4', 'https://prod.kooding.com/productDetailImage/150927-1/Korean-American-Online-Fashion-Shopping-Website-00003%20(1)-795.jpg', '2020-03-28 09:39:09', '2020-03-28 09:39:09'),
('aceba051-38e8-47b7-b015-cd908f485fdb', '78955fd1-d11f-412c-af6a-c7f6ce448ea3', 'https://prod.kooding.com/productDetailImage/209862-2/d22f79bba8806c8cadde65a4ab2c78ef801692ce.jpg', '2020-04-06 13:12:57', '2020-04-06 13:12:57'),
('ae08e790-6c0d-40b6-9750-76cbd3d1947a', '783f751c-9352-41ba-a685-9fae15dce24b', 'https://prod.kooding.com/productDetailImage/207778-2/0f7f46f2a56b24a69bc0a160aa25ff4b14a51a6d.jpg', '2020-03-28 03:06:53', '2020-03-28 03:06:53'),
('af6d2da7-b6ca-4c12-ba02-a85a0694d698', '0e02c6c6-b837-4feb-9fd7-e45a22c5dff4', 'https://prod.kooding.com/productDetailImage/177309-1/Korean-American-Online-Fashion-Shopping-Website-00009-21206.jpg', '2020-03-28 04:00:47', '2020-03-28 04:00:47'),
('b027d01e-41e5-452c-8bc0-7dddf4eb14e7', '55c80716-4d8c-4708-9f30-0755cd209966', 'https://prod.kooding.com/productDetailImage/210813-2/d16e81b836158be95dae4bf8238460b502fbd11a.jpg', '2020-03-28 03:25:14', '2020-03-28 03:25:14'),
('b1248efb-38c9-460f-85d9-5df264eaac75', 'ff97f190-daee-4d63-b681-5048646471ea', 'https://prod.kooding.com/productDetailImage/210161-2/5619922db216f18c17d3a8e33ec65de051a7d8ce.jpg', '2020-03-28 03:54:40', '2020-03-28 03:54:40'),
('b2479c1f-d131-425d-a93f-6eae17b608b0', '90f7e110-755b-412d-967d-c4e7bf88c1f1', 'https://prod.kooding.com/productDetailImage/205345-2/c4f04cc2c95faf433920fbf7a6ca12cc9fa7873c.jpg', '2020-03-28 03:57:07', '2020-03-28 03:57:07'),
('b4d420c3-1cc9-4fa7-b44a-d721f5220cb3', '5fca60ab-b7b2-4973-9a28-131894eb1156', 'https://prod.kooding.com/productDetailImage/207915-1/2ce9027c23e2b1bb86aa7e88892a890de504e0ad.jpg', '2020-03-28 04:07:06', '2020-03-28 04:07:06'),
('b54d181b-4226-4f83-ad7c-8bf7ee0c0cbb', '47db24c0-c50d-4115-81ac-14b1f87c8dee', 'https://prod.kooding.com/productDetailImage/211571-2/dafe068af5c225b7b8f75f2ae89944d421bddcf3.jpg', '2020-03-28 09:02:12', '2020-03-28 09:02:12'),
('b57f2b29-5fb9-460d-8607-c9756d2ee878', '48a17ab7-ab8b-40f2-91cd-376b3ef5118e', 'https://prod.kooding.com/productDetailImage/207834-2/9e1724853375dcf8d3814959be53c42a02959f7b.jpg', '2020-03-28 03:52:07', '2020-03-28 03:52:07'),
('b7678dca-4f47-4026-9800-29ab769ce8b7', '6a0ed388-ad6a-4ea1-abb9-d78087293b76', 'https://prod.kooding.com/productDetailImage/178958-1/Korean-American-Online-Fashion-Shopping-Website-0000-54130.jpg', '2020-03-28 08:41:35', '2020-03-28 08:41:35'),
('b9419514-6fae-400f-85fb-71c616ba00a4', '90f7e110-755b-412d-967d-c4e7bf88c1f1', 'https://prod.kooding.com/productDetailImage/205345-2/a2415998d464810b597c7bf439ba525c19dc16b5.jpg', '2020-03-28 03:57:17', '2020-03-28 03:57:17'),
('bb76a475-e122-43bb-bf19-38ebcd7144c5', 'e43569e5-67aa-47bd-be17-ee4f5000bb2a', 'https://prod.kooding.com/productDetailImage/212348-2/53c433e964aaae265808bc907e0e648fd93e7ba2.jpg', '2020-03-28 08:45:49', '2020-03-28 08:45:49'),
('bc206854-d010-4c8e-9290-3654d0a14cb9', '0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'https://prod.kooding.com/productDetailImage/210308-2/91e670b5f9754f9d5e7bd186516ced33edcf0652.jpg', '2020-03-28 08:39:34', '2020-03-28 08:39:34'),
('bc8293e9-2aca-4f52-90fa-679ba0999ae5', '5fca60ab-b7b2-4973-9a28-131894eb1156', 'https://prod.kooding.com/productDetailImage/207915-1/fda6281526f7274b3962a121693ed88929c72cbf.jpg', '2020-03-28 04:07:01', '2020-03-28 04:07:01'),
('be895ab2-bcfb-477a-9e18-5a29ca8dbb0e', '48a17ab7-ab8b-40f2-91cd-376b3ef5118e', 'https://prod.kooding.com/productDetailImage/207834-2/58f7f8b06bf49b1d1cc4f5cf1c750a933ee71a50.jpg', '2020-03-28 03:51:46', '2020-03-28 03:51:46'),
('c0350fa2-9f73-4d3a-ac0b-0f68551f2b7c', '0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'https://prod.kooding.com/productDetailImage/210308-2/d5331cf3a920f1203ae79535da71cc0d0c149fd2.jpg', '2020-03-28 08:39:39', '2020-03-28 08:39:39'),
('c1ca718d-0bd8-4be5-8aff-f216dd7e089c', '90f7e110-755b-412d-967d-c4e7bf88c1f1', 'https://prod.kooding.com/productDetailImage/205345-2/2ec677e2a36c47a815cd9eca5a115514b597bc4a.jpg', '2020-03-28 03:57:41', '2020-03-28 03:57:41'),
('c1e7d392-ebfa-4e6a-84d7-cee7cf424d8d', '0e97a60e-5a4e-4973-9df7-44d36875a4ec', 'https://prod.kooding.com/productDetailImage/210308-2/14c67c01bef3e68ac2b4432e89c2bd0ccd9d911d.jpg', '2020-03-28 08:39:59', '2020-03-28 08:39:59'),
('c55072a8-3e35-48b8-a91c-59bc7a687890', '198c3c29-677d-42b3-a06f-84e737309aed', 'https://prod.kooding.com/productDetailImage/207600-2/3a9b9bdf320701d52e8b292000b23563b2124097.jpg', '2020-03-28 09:10:49', '2020-03-28 09:10:49'),
('c562ad4f-e7ad-4953-b1db-23c6c99098f2', 'e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'https://prod.kooding.com/productDetailImage/210818-2/d70d610a260f276978b1cdb936cc28c1061d4499.jpg', '2020-03-28 03:33:49', '2020-03-28 03:33:49'),
('c5b450f5-98c5-44f1-9370-406a0ec4711d', '7b799f5f-9a7b-4c93-b584-a0dbc3a46657', 'https://prod.kooding.com/productDetailImage/210842-2/d69dc3667d36b0e4f197a604712e0e787abb0563.jpg', '2020-03-28 03:30:43', '2020-03-28 03:30:43'),
('c8565f2b-faf0-4f56-84c8-3e909061e6be', 'ff97f190-daee-4d63-b681-5048646471ea', 'https://prod.kooding.com/productDetailImage/210161-2/0d9d838d6a10d84ed8b46b6c42f248dcaa45f7b7.jpg', '2020-03-28 03:54:32', '2020-03-28 03:54:32'),
('c9bbb0e6-7a88-4b5f-abc3-84bba57ae49f', 'e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'https://prod.kooding.com/productDetailImage/210818-2/d7b57a2e05924bba5f23d1bee10f0be6aa63601f.jpg', '2020-03-28 03:33:37', '2020-03-28 03:33:37'),
('cc5ce7cf-94ef-4a09-a169-42e73a530a83', 'e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'https://prod.kooding.com/productDetailImage/210818-2/ebf635406e66815c6f747dfc39a5c420807424ea.jpg', '2020-03-28 03:33:31', '2020-03-28 03:33:31'),
('ceb4121a-582b-4a22-b19e-3af8cf32d480', '7b799f5f-9a7b-4c93-b584-a0dbc3a46657', 'https://prod.kooding.com/productDetailImage/210842-2/5c39d76dd054a85553c51cf7414483da1052f1cd.jpg', '2020-03-28 03:31:06', '2020-03-28 03:31:06'),
('d35e6d6f-dff1-47e5-8e26-29cd6d8fbe77', '55c80716-4d8c-4708-9f30-0755cd209966', 'https://prod.kooding.com/productDetailImage/210813-2/cd3766fa6bbbe7329f14a43d7cc43cc314e21dfa.jpg', '2020-03-28 03:25:06', '2020-03-28 03:25:06'),
('d748547f-a94c-4a18-a49a-4074fa0f526e', '12449e8a-9213-4337-bca9-04e779cfaffd', 'https://prod.kooding.com/productDetailImage/212503-2/1269bb30395b7ba85206620781b2fff54edc06b7.jpg', '2020-03-27 14:44:50', '2020-03-27 14:44:50'),
('d7e02da6-10ac-42f1-b1ca-c1f72109905a', '62581f78-dfb0-4deb-a6d9-e0539e2d5be9', 'https://prod.kooding.com/productDetailImage/209942-2/87a3a58cc39a5c6c27c227760fb1df2a58881109.jpg', '2020-03-28 03:05:30', '2020-03-28 03:05:30'),
('d82e72e1-d7f3-4259-a707-3c24668b20c7', '8fff1c75-4ce8-461d-bba6-c1ec6f2e09c4', 'https://prod.kooding.com/productDetailImage/212177-2/817ca30b8b5635314d4de91b1b56f8c3f45c1703.jpg', '2020-03-28 09:41:59', '2020-03-28 09:41:59'),
('dae43006-3d4b-4053-8fae-ed66a3936a91', '6a0ed388-ad6a-4ea1-abb9-d78087293b76', 'https://prod.kooding.com/productDetailImage/178958-1/Korean-American-Online-Fashion-Shopping-Website-00003%20(3)-2260.jpg', '2020-03-28 08:41:55', '2020-03-28 08:41:55'),
('dba98378-4f46-4f8f-9eff-0f4732e0aabc', 'bdb98546-1465-4fd9-a9d5-b978394580c2', 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-00010-2482.jpg', '2020-03-28 04:04:23', '2020-03-28 04:04:23'),
('dcddd533-3c50-4456-8240-cf959de44a24', '0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'https://prod.kooding.com/productDetailImage/207592-2/421e44931c676cb4716f59a2ce4c47d62fd7242d.jpg', '2020-03-28 09:30:33', '2020-03-28 09:30:33'),
('de167722-ffa5-44e8-8f4a-2504342713f7', '7539dead-26a4-4c0f-b5c5-25ce518c7522', 'https://prod.kooding.com/productDetailImage/212063-2/92ed982dbdc6cf72b9b22c49221c2607636fb2c0.jpg', '2020-03-28 09:00:15', '2020-03-28 09:00:15'),
('de8616c5-532c-43a1-ae3c-29aae56f8086', '747740f7-9166-445b-b507-3b7576f9220a', 'https://prod.kooding.com/productDetailImage/207544-2/5b14a7230ad72fc5258cee075e18b909250d259a.jpg', '2020-03-28 09:22:16', '2020-03-28 09:22:16'),
('e7baf9a4-e7a9-4dd7-b23c-3530f07709c0', '47db24c0-c50d-4115-81ac-14b1f87c8dee', 'https://prod.kooding.com/productDetailImage/211571-2/c17eaca816e0943966a081a9f461915a7d5d1579.jpg', '2020-03-28 09:02:07', '2020-03-28 09:02:07'),
('e8be9125-321d-4864-abe5-e91df7d07650', '12449e8a-9213-4337-bca9-04e779cfaffd', 'https://prod.kooding.com/productDetailImage/212503-2/651e1f4923c7303fc8e733a422489e344dac1044.jpg', '2020-03-27 14:44:19', '2020-03-27 14:44:19'),
('e8f175a0-9e04-47e4-a519-5a846b03af08', 'e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'https://prod.kooding.com/productDetailImage/210818-2/54de8e3ecd84c5f3cfbcb48f54b7011625525f82.jpg', '2020-03-28 03:33:18', '2020-03-28 03:33:18'),
('eab44f56-7e69-4cde-8dfc-8a4f2acb6546', '0dd0cea2-6ee5-4bce-ae24-fda2f22154d0', 'https://prod.kooding.com/productDetailImage/207592-2/90f7f21af6d8eda06f8ca31a0c706488fa26e314.jpg', '2020-03-28 09:31:19', '2020-03-28 09:31:19'),
('ecac5d48-bda6-4255-8929-ae28445f3d54', 'bdb98546-1465-4fd9-a9d5-b978394580c2', 'https://prod.kooding.com/productDetailImage/121138-1/Korean-American-Online-Fashion-Shopping-Website-00018-2332.jpg', '2020-03-28 04:04:40', '2020-03-28 04:04:40'),
('eccfac67-f754-48ba-b3ec-6a89869c72e9', 'b6ec6442-9978-4c52-ac0a-677ad9092e4f', 'https://prod.kooding.com/productDetailImage/192595-1/Korean-American-Online-Fashion-Shopping-Website-00006-29107.jpg', '2020-03-28 08:43:49', '2020-03-28 08:43:49'),
('f044a8dc-4698-4934-93c1-3292e6c01258', '57ffc785-4686-4beb-b822-dcd667c6c0ef', 'https://prod.kooding.com/productDetailImage/212053-2/c25d65937c0f9945070d5cb145c66666fc4d307f.jpg', '2020-03-28 08:58:36', '2020-03-28 08:58:36'),
('f23ac580-718c-4f97-abe3-07cc37a9b9bc', 'bc85fc94-88ed-490b-bcae-d5fc8aa852ab', 'https://prod.kooding.com/productDetailImage/179018-1/Korean-American-Online-Fashion-Shopping-Website-00003-navy,-112.jpg', '2020-03-28 04:09:07', '2020-03-28 04:09:07'),
('f3d6369b-6c28-4d1e-8580-b1be594fb0c6', 'd580a15c-9000-4b5a-a608-12049d556401', 'https://prod.kooding.com/productDetailImage/187961-1/Korean-American-Online-Fashion-Shopping-Website-0000-60468.jpg', '2020-03-28 04:16:33', '2020-03-28 04:16:33'),
('f6cc3610-e099-4608-8d42-7008da6154b0', '62581f78-dfb0-4deb-a6d9-e0539e2d5be9', 'https://prod.kooding.com/productDetailImage/209942-2/0986fdc2705d340e495d66fcd143453a9b081ceb.jpg', '2020-03-28 02:58:09', '2020-03-28 02:58:09'),
('f91dd157-6c9b-49f4-805e-f8c7c7d673bc', 'f17064d7-6ec4-4213-a16b-0610c7a27b72', 'https://prod.kooding.com/productDetailImage/207609-2/ae46a66b8f2ec8894cbeadea500a4c9d0674242b.jpg', '2020-03-28 09:13:07', '2020-03-28 09:13:07'),
('fa72bd3a-9f5f-4c59-857c-90e3673a4369', '12449e8a-9213-4337-bca9-04e779cfaffd', 'https://prod.kooding.com/productDetailImage/212503-2/61bd6867e2d0611b94a04936db2026cde0764a46.jpg', '2020-03-27 14:45:12', '2020-03-27 14:45:12'),
('fc20c767-13d2-4c9b-a49a-5c3f058942a2', '2dcddf62-7148-41d0-b180-97248235235b', 'https://prod.kooding.com/productDetailImage/210817-2/ef6a17c4a8b6c8c6b49f8afcb4b87e546ce977c8.jpg', '2020-03-28 03:37:36', '2020-03-28 03:37:36'),
('fc505f0c-93d2-4a33-aea1-c73656044f46', 'e3c6c629-072e-4bbb-b1a0-2ca58934e09c', 'https://prod.kooding.com/productDetailImage/210818-2/e742cbc900180036e57a2b5cb5f84897783d7e21.jpg', '2020-03-28 03:34:16', '2020-03-28 03:34:16'),
('fd6d6504-d924-43e9-871e-14c4264e96ac', 'e43569e5-67aa-47bd-be17-ee4f5000bb2a', 'https://prod.kooding.com/productDetailImage/212348-2/20f92b1b9ce912cf73261f6877da6a454a71ec7e.jpg', '2020-03-28 08:45:44', '2020-03-28 08:45:44'),
('ff873110-3e52-436f-9d45-9fe6ac99db5c', '78955fd1-d11f-412c-af6a-c7f6ce448ea3', 'https://prod.kooding.com/productDetailImage/209862-2/e2958f919895766cf8e3302d104f54ad70fb90c5.jpg', '2020-04-06 13:13:03', '2020-04-06 13:13:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '287a88f6-03e1-4ef3-8e6c-c9447aa8426f',
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'https://i.ibb.co/kJ9W9LL/0f9a7f73af1e8fbada4deb9e78631e33-man-user-operator-clip-art-at-clkercom-vector-clip-art-online-360-598.png',
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `name`, `avatar`, `address`, `phone`, `createdAt`, `updatedAt`) VALUES
('287a88f6-03e1-4ef3-8e6c-c9447aa8426f', 'tam310599@gmail.com', '$2b$10$8d6Y3JTaGhXGDHHzrLFhQOob0lRAKtbhFIJriv8WktSdTF8yRPcjG', 'user', 'Tâm Nguyễn Minh', 'https://i.imgur.com/beKcgee.jpg', 'KTX khu A đại học Quốc gia, Linh Trung Thủ Đức', '31034139433123', '2020-04-13 16:51:39', '2020-04-14 13:18:16'),
('38ff6065-a19a-45a6-ad32-7451f1f9c0ef', 'sadasd@gmail.com', '$2b$10$d5PEEtsGujEGOJD1OM0jBexhSado9CLTiizkxWZQaSNEPxpmDrkxe', 'user', '1', 'https://i.ibb.co/kJ9W9LL/0f9a7f73af1e8fbada4deb9e78631e33-man-user-operator-clip-art-at-clkercom-vector-clip-art-online-360-598.png', '', '1', '2020-04-13 17:26:15', '2020-04-14 01:42:11'),
('6e55a127-5c3b-4a5a-b82d-e5bedc3e8441', 'minhtamk14@gmail.com', '$2b$10$UgzaXVslAmWJ5D4B0MY7juX7Ycg8pXaMg9ttQhhvPXaH1KR.4DXRG', 'user', 'Nguyễn Minh Tâm', 'https://i.imgur.com/XCSfbTH.jpg', 'df3', 'df3', '2020-04-14 02:49:00', '2020-04-14 14:26:10'),
('9686a13f-adad-488c-8716-ea9bae4c2c18', 'tam@gmail.com', '$2b$10$6RFfuZR2ge9h.6NTeguhMOmdbxu661sAYFfO125rXvUqr1hlNnuta', 'user', 'tam', 'https://i.ibb.co/kJ9W9LL/0f9a7f73af1e8fbada4deb9e78631e33-man-user-operator-clip-art-at-clkercom-vector-clip-art-online-360-598.png', 'tam', '0912', '2020-04-14 04:24:20', '2020-04-14 04:24:20');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `subimg`
--
ALTER TABLE `subimg`
  ADD PRIMARY KEY (`id`,`image`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
