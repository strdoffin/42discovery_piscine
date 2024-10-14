i=1
a=1
v=$#
if [ $v -ne $((0)) ] ;then
for a in $@
do
	echo $a
	((i++))
	((a++))
	if [ $i -gt 3 ] ;then
		exit;
	fi
done
else
	echo no arguments
fi
