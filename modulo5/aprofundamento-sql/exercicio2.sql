USE `Hopper-4314144-pedro-junior`; 
SET SQL_SAFE_UPDATES = 0;

-- ## Exercício 2
-- Desenvolva uma query (ou queries) que insira na tabela criada no Exercício 1 os seguintes 3 usuários:
-- Projeto 1 = {
-- 	id: "001",
--   name: "LabeSky",
--   title: "LSy",
-- 	date: "2023/10/05"
-- };
-- Projeto 2 = {
-- 	id: "002",
-- 	name: "Labefy",
-- 	title: "LFy",
-- 	date: "2024/01/06"
-- };
-- Projeto 3 = {
-- 	id: "003",
-- 	name: "AstroZoom",
--   title: "AZm",
--   date: "2022/12/20"
-- };

INSERT INTO Projetos (id,name,title,date)
	VALUES	("001","LabeSky","LSy","2023/10/05"),
			("002","Labefy","LFy","2024/01/06"),
            ("003","AstroZoom","AZm","2022/12/20");
            
SELECT * FROM Projetos;