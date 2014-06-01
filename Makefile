all:
	test -d fbmarkdown/css || mkdir fbmarkdown/css
	lessc less/markdown.less > fbmarkdown/css/markdown.css
