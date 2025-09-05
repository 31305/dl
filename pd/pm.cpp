#include <osg/ShapeDrawable>
#include <osg/Geode>
#include <osg/Camera>
#include <osg/GraphicsContext>
#include <osg/Group>
#include <osg/MatrixTransform>
#include <osg/StateSet>
#include <osgUtil/SceneView>
osg::ref_ptr<osg::Node> mvn()
{
    osg::ref_ptr<osg::Box> m = new osg::Box(osg::Vec3(0,0,0), 1.0f);
    osg::ref_ptr<osg::ShapeDrawable> b = new osg::ShapeDrawable(m);
    osg::ref_ptr<osg::Geode> vl = new osg::Geode();
    vl->addDrawable(b);
    return vl;
}
int main(int,char**)
{
    osg::ref_ptr<osg::GraphicsContext::Traits> vs = new osg::GraphicsContext::Traits;
    vs->x = 0;
    vs->y = 0;
    vs->width = 800;
    vs->height = 600;
    vs->windowDecoration = false;
    vs->doubleBuffer = true;
    vs->sharedContext = 0;

    osg::ref_ptr<osg::GraphicsContext> ps = osg::GraphicsContext::createGraphicsContext(vs.get());

    osg::ref_ptr<osg::Group> m = new osg::Group;
    m->addChild(mvn());

    osg::ref_ptr<osg::Camera> d = new osg::Camera;
    d->setGraphicsContext(ps.get());
    d->setViewport(new osg::Viewport(0, 0, vs->width, vs->height));
    d->setProjectionMatrixAsPerspective(45.0, 
                                             double(vs->width)/double(vs->height), 
                                             1.0, 1000.0);
    d->setViewMatrixAsLookAt(osg::Vec3(3,3,3), osg::Vec3(0,0,0), osg::Vec3(0,0,1));

    osg::ref_ptr<osgUtil::SceneView> pd = new osgUtil::SceneView;
    pd->setSceneData(m.get());
    pd->setCamera(d.get());

    bool ng = false;
    while (!ng) {
        ps->makeCurrent();
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        pd->update();
        pd->cull();
        pd->draw();
    }
    return 0;
}
