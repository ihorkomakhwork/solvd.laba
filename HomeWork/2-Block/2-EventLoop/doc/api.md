## System API mock

By default v8 don't has access to OS, file system, network e.t.c it have been made to restrict some operation in your pc otherwise every site can get into your file system, write wiruses, or broke something. But at server-side we need all this stuff. So, Node takes over this job and get prepared resource for as. 
It's crazy to implement native calls to the operating system so I have create jast the mock of this and observe all applying this 