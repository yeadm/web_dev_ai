--서브쿼리 : select 안의 select
--mileage가 평균보다 많이 탄 차들만 조회
SELECT*FROM cars WHERE mileage > avg(mileage); -- aggregate error!

SELECT avg(mileage) FROM cars; -- 98329.092370952
