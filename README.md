# ToDo webapp

This webapp will be build using preact, redux and purecss. Testing using tape



## Planned features

### GTD

* Inbox
    * Need quick-add on all platforms
* Next task
    * Prioritize "next task" list, so we can have *the* next task
* Waiting
    * Specify blocking tasks (userful for projects)
* Tickler file (add back to inbox in a given amount of time/specified date)
* Some day
* Projects
    * Sub-projects?
* Contexts
* Daily reminder
* Weekly ideas dump
    * Report on remaining tasks?

### Technology

* Dockerized microservices
    * Website
    * Multiplatform Application
        * PC/Mac through electron.io
        * Android/iOS through react-native
        * Webapp (this repo)
    * Backend
        * Auth service
        * DB service
        * API
* Possibly location tracking to detect right context
    * Notice if at home/work/shopping/mobile/computer
        * Maybe add location to custom contexts