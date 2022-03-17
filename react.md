# react 路由

    + Link （路由导航组件）不包括样式
    + navLink (路由导航组件匹配，默认添加了激活样式)
    + 精准匹配  exact(关键词)，默认匹配路由路径，* 不能是使用在动态路由上面。
       1. 模糊匹配，时没有使用exact 。
    + 单一匹配  switch(只匹配一个)，一般和exact进行使用，进行精准匹配
    + Redirect (重定向组件) ,一般属性to  value(string,Object); push和to 一起使用
    + 嵌套路由
     1.在父组件中定义路由，且，路径必须加上父祖件的路劲，且，父组件上不能使用exact(严格模式)

    + 路由组件传参 ;params（/:id）;取值，this.props.match.params; search 传参，获取方式，将查询字符，用queryString这个包进行为   查     询   对象
       ```
       import qs from "queryString"
       const {location}=this.props;
       qs.parse(location.search.slice(1,));

       ```
    + state 传参
        ```
            <NavLink to={pathname:"/xxx/xxx",state:{is:true}}></NavLink>
            <Route>
                <xxxx/>
            </Route>

            获取值的方式是:
            const {state}=this.props.location;
       ```
    + 路由的跳转方式，默认是push，只需要加上replace 就是将当前模式改替换模式

    + 路由编程模式
        1.this.props.history.push("path",{key:value})
        2.this.props.history.replace("path',{key:value})
    +withRouter包装一般组件，让组件具有路由组件的api;

    +BrowerRouter 和hash的不同点
        1.历史模式，在形式表现是不一样的，在路径后面没有#;且，在浏览器中访问的地址，会在浏览器中产生历史记录。且会保存state的值。
        2.哈希模式，在形式上表现是是，在路径上有#，且，也会在浏览器中产生历史记录，主要是由哈希值维护，且state值，是无法访问的。


# react 的样式引入
    【name】.module.css,使用方式:import Module from "xxx";
    【name】.css 的方式
    修改内部样式
        :global(类名){} //这里为了修改内部的全局样式。

# 事件
    默认事件时没有，this,指向的是事件对象，要用bind进行绑定
    react中的事件是合成事件，保持兼容性，且是用事件委派的形式触发，（优化）,可以通过event.target获取当前的dom;
    传参的形式: 直接绑定函数，event对象默认在最后一个参数，如果是用箭头函数，传参，默认是要指明传参数的

# dom的获取
   ref :(el)=>{}
  dom= createRef()创建的容器,使用时，ref={this.dom}

# 收控组件和非收控组件
    非受控组件:使用组件时，直接从ref 绑定的dom中获取，没有限制。
    受控组件:将表单组件的值和state状态绑定在一起，通过onChange 获取值，赋值给state

# 高阶组件
    高阶组件是一个函数，接受一个参数是一个组件，返回一个新的组件

# 高阶函数
    返回值是一个函数，
    参数中，参数是一个函数
    使用场景: setTime(),setInterval(),闭包，map(),forEach()方法

# 函数柯里化
  函数的返回值是一个函数，实现多次接受参数的方式，最后实现统一处理的方式

# 生命周期
    componentDidMounted
    componentWillunMounted

# redux 的使用流程
    使用 redux下的createstore()方法，接受一个函数，redures一个函数，有连个个参数，state,action(这里指触发方法);
    当我们触发修改状态时，可以通过，store下的dispatch方法派发一个action对象，这里的action,会在redures中收到。在组件页面中使用
    store.getState()获取当前的状态。可以通过，store.subscribe()这个监听方法。来修改状态。

# immutable 用于持久化，一般是在拷贝时，指挥copy 的时修改的属性和内存。
    1.节省内存

# react组件通讯
   props 属性父组件向子组件传值 

   子组件向父组件传递参数
    
        

    