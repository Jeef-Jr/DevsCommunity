-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.24-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para devs
CREATE DATABASE IF NOT EXISTS `devs` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `devs`;

-- Copiando estrutura para tabela devs.langs
CREATE TABLE IF NOT EXISTS `langs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela devs.langs: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `langs` DISABLE KEYS */;
INSERT INTO `langs` (`id`, `nome`) VALUES
	(1, 'React'),
	(2, 'NodeJs'),
	(3, 'PHP7'),
	(4, 'Java'),
	(5, 'Python'),
	(6, 'Flutter'),
	(7, 'Dart');
/*!40000 ALTER TABLE `langs` ENABLE KEYS */;

-- Copiando estrutura para tabela devs.metrica_like
CREATE TABLE IF NOT EXISTS `metrica_like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `langs_id` int(11) NOT NULL,
  `access` date DEFAULT current_timestamp(),
  PRIMARY KEY (`user_id`,`langs_id`) USING BTREE,
  UNIQUE KEY `id` (`id`),
  KEY `langs_id` (`langs_id`),
  CONSTRAINT `metrica_like_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `metrica_like_ibfk_2` FOREIGN KEY (`langs_id`) REFERENCES `langs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela devs.metrica_like: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `metrica_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `metrica_like` ENABLE KEYS */;

-- Copiando estrutura para tabela devs.metrica_view
CREATE TABLE IF NOT EXISTS `metrica_view` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `langs_id` int(11) DEFAULT NULL,
  `access` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `langs_id` (`langs_id`),
  CONSTRAINT `metrica_view_ibfk_1` FOREIGN KEY (`langs_id`) REFERENCES `langs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela devs.metrica_view: ~139 rows (aproximadamente)
/*!40000 ALTER TABLE `metrica_view` DISABLE KEYS */;
/*!40000 ALTER TABLE `metrica_view` ENABLE KEYS */;

-- Copiando estrutura para tabela devs.ticket
CREATE TABLE IF NOT EXISTS `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dificuldade` int(11) NOT NULL DEFAULT 0,
  `descricao` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) DEFAULT NULL,
  `langs_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ticket_user` (`user_id`),
  KEY `FK_ticket_langs` (`langs_id`),
  CONSTRAINT `FK_ticket_langs` FOREIGN KEY (`langs_id`) REFERENCES `langs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_ticket_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela devs.ticket: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;

-- Copiando estrutura para tabela devs.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela devs.user: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
