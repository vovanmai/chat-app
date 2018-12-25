<template>
    <div class="">
        <div class="panel messages-panel" style="height: 100vh;">
            <div class="contacts-list">
                <div class="inbox-categories">
                    <div data-toggle="tab" @click="is_roon = false" data-target="#inbox" class="active"> Inbox </div>
                    <div data-target="" @click="is_roon = true"> Rooms </div>
                    <!--<div data-toggle="tab" data-target="#marked"> Marked </div>-->
                    <!--<div data-toggle="tab" data-target="#drafts"> Drafts </div>-->
                </div>

                <div class="tab-content">
                    <div id="inbox" class="contacts-outter-wrapper tab-pane active" style="height: 100vh">
                        <form v-if="is_roon" class="panel-search-form info form-group has-feedback no-margin-bottom">
                            <input type="text" class="form-control" name="search" placeholder="Create room" style="padding-left: 10px">
                            <span class="fa fa-plus form-control-feedback"></span>
                        </form>
                        <div class="contacts-outter">
                            <ul class="list-unstyled contacts">
                                <li @click="chooseUserToChat(user.username, user.conversation_id)" v-for="(user, index) in user_lists" data-toggle="tab" data-target="#inbox-message-1" :class="index == 0 ? 'active' : ''">
                                    <div v-if="user.last_message" class="message-count"> 1 </div>
                                    <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                    <div class="vcentered info-combo">
                                        <h3 class="no-margin-bottom name"> {{ user.username }} </h3>
                                        <h5 v-if="user.last_message"> <span style="font-weight: bold">{{ user.last_message }}</span> want to chat with you!</h5>
                                    </div>
                                    <div class="contacts-add">
                                        <span class="message-time"> 2:32 <sup>AM</sup></span>
                                        <i class="fa fa-trash-o"></i>
                                        <i class="fa fa-paperclip"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content">
                <div class="tab-pane message-body active" id="inbox-message-1">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message" @click.prevent="logout">
                            <i class="fa fa-sign-out" aria-hidden="true"></i> {{current_user.username}}
                        </a>
                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body" id="chat-content">
                            <div class="message" v-for="(message, index) in messages" :class="message.class">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> {{ message.username }} </h4>
                                        <h5> <i class="fa fa-clock-o"></i> {{ message.created_at}} PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        {{ message.message }}
                                    </div>
                                </div>
                                <br>
                            </div>
                        </div>

                        <div class="chat-footer">
                            <!--<textarea class="send-message-text"></textarea>-->
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <input type="text" class="send-message-text" v-model="msg" @keyup.enter="sendMessage">
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="inbox-message-2">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">
                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Mark Zuckerberg </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 3:45 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Hi, Dennis. How's it going with your latest project?
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 3:52 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Hello. It's going well, thanks, but I may need your help tomorrow evening. Will you be available ?
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Mark Zuckerberg </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 3:56 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Of course, just call me before that, in case I forget.
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 4:01 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Great, thank you.
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="inbox-message-3">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">
                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Evan Williams </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 5:07 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Hey, you asked for my feedback, it's brilliant. Damn, I envy you I didn't come up with something this good :D Keep it up, man, it's going to be very popular. Trust me !
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 5:16 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Wow, thanks. You'll be my main template tester from now on :)
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Evan Williams </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 5:21 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        I'm all in, as long as you continue to make such great templates.
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="inbox-message-4">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">
                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Jonahtan Ive </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 6:12 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        I'm coming to your place at 9 pm and I hope you'll have those tasty brownies again :)
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 6:16 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Ye, I still have a bag full of them.
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Jonahtan Ive </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 6:12 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Great, we have a lot of work to do and we need fuel :D
                                    </div>
                                </div>
                                <br>
                            </div>
                            <div class="message info">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Jonahtan Ive </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 6:13 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        And invite Daniel too, please.
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="sent-message-1">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 2:05 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Hi, I've just finished the stickers you wanted. I'll send them to you in an archive in 10 minutes.
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message success">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> David Beckham </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 2:11 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Hello, Dennis. Thanks. Also how's it going with our latest football website. Do you need any additional help or information?
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message success">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> David Beckham </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 2:24 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        I would like to take a look at it this evening, is it possible ?
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 2:25 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            It's going well, no need for any other help, thanks. Sure, send me a message when you'll be ready.
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="sent-message-2">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 12:36 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Hi, can you please test my new template Dauphin and tell me if you like it ?
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message success">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Jeff Williams </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 12:41 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Hello, Dennis. I will take a look at it tomorrow, because I'm already fed up with the current project.
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 12:46 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Thanks :)
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="marked-message-1">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">
                            <div class="message warning">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Jessica Fresco </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 1:44 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Hello, Dennis. I wanted to let you know we reviewed your proposal and decided you'll start working together with our UI/UX team on Tuesday, January 10th, 2017. Congratulations and thank you!
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 1:51 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Hello, great news. I'm sure we're going to make something amazing together!
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="marked-message-2">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">
                            <div class="message warning">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Pavel Durov </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 3:23 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Hey, we need your help for our next Telegram re-design. Are you available to talk about this tomorrow evening at around 8 PM ?
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 3:31 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Hello, yes I will. It's always a pleasure to work with you and your team :)
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                            <div class="message warning">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-info">
                                        <h4> Pavel Durov </h4>
                                        <h5> <i class="fa fa-clock-o"></i> 3:35 PM </h5>
                                    </div>
                                    <hr>
                                    <div class="message-text">
                                        Perfect, talk to you tomorrow evening.
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>

                <div class="tab-pane message-body" id="draft-message-1">
                    <div class="message-top">
                        <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>

                        <div class="new-message-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Send message to...">
                                <a class="btn btn-danger close-new-message" href="#"><i class="fa fa-times"></i></a>
                            </div>

                            <div class="chat-footer new-message-textarea">
                                <textarea class="send-message-text"></textarea>
                                <label class="upload-file">
                                    <input type="file" required="">
                                    <i class="fa fa-paperclip"></i>
                                </label>
                                <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div class="message-chat">
                        <div class="chat-body">

                            <div class="message my-message">
                                <img alt="" class="img-circle medium-image" src="https://bootdey.com/img/Content/avatar/avatar1.png">

                                <div class="message-body">
                                    <div class="message-body-inner">
                                        <div class="message-info">
                                            <h4> Dennis Novac </h4>
                                            <h5> <i class="fa fa-clock-o"></i> 4:22 PM </h5>
                                        </div>
                                        <hr>
                                        <div class="message-text">
                                            Hello, Mila, can you send me the latest pack of icons, I need all the source files. Thanks.
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>

                        </div>

                        <div class="chat-footer">
                            <textarea class="send-message-text"></textarea>
                            <label class="upload-file">
                                <input type="file" required="">
                                <i class="fa fa-paperclip"></i>
                            </label>
                            <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import io from 'socket.io-client';
    const socket = io('localhost:3000');

    export default {
        name: "Home",
        data: function () {
            return {
                messages: [

                ],
                msg: '',
                current_user: {},
                user_lists: [],
                chatting_user: '',
                conversation_id: '',
                is_roon: false,
            }
        },
        created: function () {
            const current_user = JSON.parse(localStorage.getItem('user'))
            this.current_user = current_user
            this.listenFromServer()
        },
        methods: {
            sendMessage: function () {
                if (this.msg !== '') {
                    let messageObj = {
                        username: this.current_user.username,
                        receiver: this.chatting_user,
                        created_at: '2018-12-21 12:12:00',
                        message: this.msg,
                        class: "my-message",
                        conversation_id: this.conversation_id
                    }
                    this.messages.push(messageObj)
                    socket.emit("user-send-message", messageObj)
                    this.msg = "";
                    this.$nextTick(function () {
                        let contentChat = document.getElementById('chat-content')
                        contentChat.scrollTop = contentChat.scrollHeight;
                    });
                }
            },
            logout: function () {
                socket.emit("update_user-lists", this.current_user.name)
                localStorage.removeItem('user')
                this.$router.push('/register')
            },
            chooseUserToChat: function (username, conversation_id) {
                this.chatting_user = username
                this.conversation_id = conversation_id
                for (let i = 0; i < this.user_lists.length; i++) {
                    if (this.user_lists[i].username === username) {
                        this.user_lists[i].last_message = ''
                        break
                    }
                }
                socket.emit("user-choc", conversation_id)
            },
            listenFromServer: function () {
                const vm = this
                socket.on("server-send-message-to-client" + this.current_user.username, function (data) {
                    let messageObj = {
                        username: data.username,
                        created_at: data.created_at,
                        message: data.message,
                        class: "success",
                    }
                    if (data.username === vm.chatting_user) {
                        vm.messages.push(messageObj)
                        vm.$nextTick(function () {
                            let contentChat = document.getElementById('chat-content')
                            contentChat.scrollTop = contentChat.scrollHeight;
                        });
                    } else {
                        let users = vm.user_lists
                        for (let i = 0; i < users.length; i++) {
                            if (users[i].username === data.username) {
                                users[i].last_message = data.username
                                break
                            }
                        }
                        vm.user_lists = users
                    }
                })
                socket.on('send-user-lists-to-client', function (data) {
                    let index = null
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].username === vm.current_user.username) {
                            index = i
                            break
                        }
                    }
                    data.splice(index, 1)
                    if (data.length) {
                        if (vm.chatting_user) {
                            vm.chatting_user = vm.chatting_user
                        } else {
                            vm.chatting_user = data[0].username
                        }
                        vm.conversation_id = data[0].conversation_id
                    }
                    vm.user_lists = data
                })
                socket.on("server-send-choc", function (data) {
                    console.log(data)
                })
            }
        },
    }
</script>

<style scoped>

</style>