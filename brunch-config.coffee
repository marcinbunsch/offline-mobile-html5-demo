exports.config =

  paths:
    public: 'public'

  files:
    javascripts:
      defaultExtension: 'coffee'

      order:
        before: [
          /^bower_components\//
          /vendor/
          /app/
        ]

      joinTo:
        'js/app.js': /^(app|bower_components|vendor)\//

    stylesheets:
      defaltExtension: 'sass'

      order:
        before: [
          /^bower_components\//
        ]

      joinTo:
        'css/styles.css': /^(app|bower_components)\//


