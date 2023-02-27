# Index

{% if user and user.login == "simcolor" %}
[Create a new blog post](https://github.com/simcolor/simcolor.github.io/new/main/blog)
{% endif %}

{% assign dir = page.dir | remove_first: '/' %}
<ul>
  {% for file in site.pages %}
    {% if file.path contains dir %}
      {% if file.name != "index.md" %}
         <li><a href="{{ file.url | remove: '.md' }}">{{ file.name | remove: '.md' }}</a>
          {% if user and user.login == "simcolor" %} <a href="{{ 'https://github.com/simcolor/simcolor.github.io/edit/main/blog/' | append: file.name }}">(edit)</a> {% endif %}
        </li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

