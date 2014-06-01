all:
	test -d fbmarkdown/css || mkdir fbmarkdown/css
	lessc less/markdown.less > fbmarkdown/css/markdown.css
	zip -0 -r fbmarkdown.zip fbmarkdown -x *.DS_Store*
