# Index

[Create a new blog post](https://github.com/simcolor/simcolor.github.io/new/main/blog)


{% assign dir = page.dir | remove_first: '/' %}
<ul>
  {% for file in site.pages %}
    {% if file.path contains dir %}
      {% if file.name != "index.md" %}
        <li><a href="{{ file.url | remove: '.md'}}">{{ file.name | remove: '.md' }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

