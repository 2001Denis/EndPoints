-- endpoints;


CREATE TABLE `endpoint` (
  `id` int(4) NOT NULL,
  `api` varchar(30) NOT NULL,
  `url` varchar(150) NOT NULL,
  `verbo` varchar(10) NOT NULL,
  `body` varchar(100) DEFAULT NULL,
  `request` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `response_ok` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `response_nok` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `endpoint` (`id`, `api`, `url`, `verbo`, `body`, `request`, `response_ok`, `response_nok`) VALUES
(2, 'prueba', 'http://localhost:3606/api', 'post', NULL, 'request', 'response_ok', 'response_nok'),
(3, 'prueba uno', 'http://localhost:3606/api', 'post', NULL, 'request', 'response_ok', 'response_nok');


