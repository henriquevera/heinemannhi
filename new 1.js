function main()
var board:=game start
game set background scene()
var sprite:=game create sprite ()
sprite on tap(tapped)
where tapped(x:Number,y:Number)is
sprite set speed y(-200)
game add score(100)
end
end
board set gravity(0,400)
board add on every frame do
if sprite y>board height then
sprite set speed y(-500)
sprite set speed x(math random range(-100,100))
game remove life(1)
else do nothing end if
if sprite x<0 or sprite x> board width then
sprite set speed x(-sprite speed x)
else do nothing end if
end
end