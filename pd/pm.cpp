#include<osg/ShapeDrawable>
#include<osg/Geode>
#include<osg/Camera>
#include<osg/GraphicsContext>
#include<osg/Group>
#include<osg/MatrixTransform>
#include<osg/StateSet>
#include<osgUtil/SceneView>
#include<jsdp.h>
osg::ref_ptr<osg::Node> mvn()
{
    osg::ref_ptr<osg::Box> m = new osg::Box(osg::Vec3(0,0,0), 1.0f);
    osg::ref_ptr<osg::ShapeDrawable> b = new osg::ShapeDrawable(m);
    osg::ref_ptr<osg::Geode> vl = new osg::Geode();
    vl->addDrawable(b);
    return vl;
}
struct
{
	jsdp dp;
    osg::ref_ptr<osgUtil::SceneView> pd=new osgUtil::SceneView;
	osg::ref_ptr<osg::GraphicsContext> ps;
    osg::ref_ptr<osg::Group>m=new osg::Group;
    osg::ref_ptr<osg::Camera>d=new osg::Camera;
	void dss()
	{
		d->setViewport(new osg::Viewport(0,0,dp.vpv1,dp.vpv2));
		d->setProjectionMatrixAsPerspective(45.0,double(dp.vpv1)/double(dp.vpv2),1.0,1000.0);
		d->setViewMatrixAsLookAt(osg::Vec3(3,3,3),osg::Vec3(0,0,0),osg::Vec3(0,0,1));
	}
	void jst()
	{
		dp.pk=[this]()
		{
			osg::ref_ptr<osg::GraphicsContext::Traits> vs=new osg::GraphicsContext::Traits;
			vs->x=0;
			vs->y=0;
			vs->width=dp.vpv1;
			vs->height=dp.vpv2;
			vs->windowDecoration=false;
			vs->doubleBuffer=true;
			vs->sharedContext=0;
			ps=osg::GraphicsContext::createGraphicsContext(vs.get());
			m->addChild(mvn());
			d->setGraphicsContext(ps.get());
			pd->setSceneData(m.get());
			dss();
			pd->setCamera(d.get());
			dp.sck=
			{
				[this](double kn,bool vpv)
				{
					if(vpv)
					{
						ps->resized(0,0,dp.vpv1,dp.vpv2);
						dss();
					}
		    	    ps->makeCurrent();
	    		    pd->update();
    	    		pd->cull();
			        pd->draw();
				}
			};
		};
		dp.dk();
	}
}jst;
